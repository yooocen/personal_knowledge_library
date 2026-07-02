# 通勤路况智能体落地文档（上班前2小时自动查询）

目标：每天在用户上班前 2 小时，自动调用高德“青鸾出行卡”接口获取路况/通勤方案，并通过小艺开放平台 Webhook 触发器推送到用户手机端（点击进入智能体查看结果或触发工作流生成结果）。

本方案把职责拆清：
- 你的服务：定时调度 + 调高德接口 + 组装结果 + 调华为 Webhook。
- 小艺开放平台：Webhook 触发器鉴权、推送通知、触发工作流/插件执行与展示。

## 0. 依赖资料
- 高德接口：`pdf/高德x华为青鸾出行卡接口文档.pdf`
- 小艺开放平台：`触发器 -> Webhook事件` 文档（含鉴权头、签名、JSON-RPC body 结构）

## 1. 端到端流程概览
1. 用户在你的业务侧配置通勤信息：上班时间、家/公司位置、出行方式偏好。
2. 你的后端在“上班时间 - 2h”触发任务。
3. 后端调用高德接口 `POST /third/meta-card/navi-route` 获取通勤数据。
4. 后端将结果以 `data` 推送到华为 Webhook 统一接口。
5. 用户收到通知，点击进入智能体。
6. 触发器配置的“工作流/插件”读取 `EVENT_INPUT.payload` 并生成展示内容（文字 + 深链）。

## 2. 你需要保存的用户配置（最小集）
建议建表 `commute_profile`（示意字段）：
- `user_id`：你的用户标识
- `timezone`：例如 `Asia/Shanghai`
- `work_start_time`：例如 `09:30`（本地时间）
- `workdays`：例如 `1,2,3,4,5`
- `origin_lng`, `origin_lat`：家（或出发地）经纬度
- `origin_name`：可选，默认“我的位置”
- `dest_lng`, `dest_lat`：公司（或目的地）经纬度
- `dest_name`：可选
- `travel_mode`：可选：`drive` 或 `transit`；不传默认“驾车 + 公共交通”
- `enabled`：是否启用自动推送
- `huawei_webhook_api_id`：你配置的触发器 `apiId`
- `huawei_access_key` / `huawei_security_key`：不建议按用户存，推荐按“智能体/业务”全局存（更安全）

## 3. 定时策略（上班前2小时）
调度逻辑建议（伪代码）：
1. 每天 00:05 扫描所有启用的 `commute_profile`，计算当天是否为工作日。
2. 对每个工作日 profile 计算：
   - `send_at = today(work_start_time) - 2h`（按 profile.timezone）
3. 若 `send_at` 已过但仍希望当天补发，可设置容错窗口（例如延迟不超过 30 分钟仍发）。

注意：
- 需要考虑节假日：如果你要更准确，需要节假日数据源（否则按周一到周五）。
- 多设备/多入口不影响此链路，核心是 push 到用户手机端。

## 4. 调高德“青鸾出行卡”接口（来自 PDF）
### 4.1 接口地址
- 预发：`POST https://quickapp-pre.amap.com/third/meta-card/navi-route`
- 正式：`POST https://quickapp.amap.com/third/meta-card/navi-route`

### 4.2 请求头
- `Content-Type: application/json`

### 4.3 入参（关键字段）
- `lng` / `lat`：起点经纬度（string）
- `name`：起点名称（可不传，默认“我的位置”）
- `dest_lng` / `dest_lat`：目的地经纬度（string）
- `dest_name`：目的地名称（可选）
- `manufacture`：固定 `hw_qingluan`
- `travel_mode`：可选
  - `drive`：驾车
  - `transit`：公共交通
  - 不传：默认返回驾车+公共交通数据

### 4.4 请求示例（JSON）
```json
{
  "lng": "116.490085",
  "lat": "40.00243388888889",
  "dest_lng": "116.468872",
  "dest_lat": "40.010779",
  "manufacture": "hw_qingluan",
  "travel_mode": "drive"
}
```

### 4.5 响应里你通常会用到的字段（示例）
返回外层：
- `code`：示例里 `"1"` 表示成功（以 PDF 为准）
- `result`：`"true"` / `"false"`
- `data`：主要数据

`data.drive_card`：
- `drive_time`：预计时长（秒）
- `drive_length`：距离（厘米 cm）
- `drive_traffic_light`：红绿灯数量
- `drive_traffic_time`：拥堵时长（秒）
- `drive_traffic_state`：路况串（长度:状态）
- `deep_link.url`：唤起高德的导航深链

`data.transport_card`：
- `public_transport_time`：预计时长（秒）
- `public_transport_station_num`：站点数
- `public_transport_expense`：费用
- `public_transport_path`：路径段 JSON 字符串
- `deep_link.url`：公交导航深链

## 5. 将高德结果“推送”到小艺开放平台（Webhook 触发器）
### 5.1 平台侧准备（一次性）
1. 工作空间 -> 凭证 -> 新建凭证，拿到 `Access Key` + `Security Key`。
2. 智能体 -> 触发器 -> 新建 `Webhook事件`：
   - 选择上一步的密钥对
   - 配置任务执行：选 `工作流`（推荐）或 `插件`
3. 保存后，重新进入该触发器页面，记录 `apiId`（用于请求 body 里 `result.apiId`）。

### 5.2 Webhook 统一接口
- `POST https://hag.cloud.huawei.com/open-ability-agent/v1/agent-webhook`

### 5.3 请求头（必填）
- `Content Type: application/json`
- `Accept: application/json`
- `x-hag-trace-id`: 随机串（用于定位）
- `X-Access-Key`: 触发器分配的 `Access Key`
- `X-Ts`: 毫秒时间戳字符串
- `X-Sign`: `Base64(HMAC-SHA256(secretKey, ts))`

### 5.4 Body（JSON-RPC；以 data 消息触发工作流/插件）
关键点：
- `result.apiId`：触发器的 `apiId`
- `result.pushText`：通知栏文案（长度限制见平台文档）
- `artifacts[].parts[].kind = "data"`：用 data 才会触发“任务执行”
- `artifacts[].parts[].data`：将作为工作流的 `EVENT_INPUT.payload`

最小示例（结构）：
```json
{
  "jsonrpc": "2.0",
  "id": "外层uuid",
  "result": {
    "id": "内层uuid",
    "apiId": "webhookxxxxxxxx",
    "pushId": "push_uuid",
    "pushText": "上班路况已更新，点击查看",
    "kind": "task",
    "artifacts": [
      {
        "artifactId": "artifact_uuid",
        "parts": [
          {
            "kind": "data",
            "data": {
              "origin": { "lng": "116.49", "lat": "40.00", "name": "我的位置" },
              "destination": { "lng": "116.46", "lat": "40.01", "name": "公司" },
              "travel_mode": "drive",
              "amap": {
                "drive_time_sec": 660,
                "drive_traffic_time_sec": 0,
                "drive_length_cm": 315600,
                "drive_deep_link": "amapuri://route/plan?...",
                "transit_time_sec": 1401,
                "transit_deep_link": "amapuri://route/plan?..."
              }
            }
          }
        ]
      }
    ]
  }
}
```

## 6. 工作流怎么写（操作级别）
目标：把 `EVENT_INPUT.payload` 里的字段转成用户看得懂的一段话，并给一个“打开高德导航”的跳转方式。

建议工作流节点：
1. 开始节点：读取 `EVENT_INPUT.payload`
2. 选择器节点（可选）：如果 payload 里有 `travel_mode`，分别走驾车/公交展示逻辑
3. 文本拼接节点（或 LLM 节点）：生成展示文案
4. 输出节点：返回文本（可带 Markdown）和深链

注意（来自平台文档）：
- 触发器触发工作流没有用户输入，工作流不要依赖默认 `USER_INPUT`。
- 在开始节点定义你要用的入参，从 `EVENT_INPUT.payload` 映射。

## 7. 服务端示例实现（伪代码）
```ts
// 1) 计算触发时间：workStart - 2h
// 2) 到点后调用高德接口
const amapResp = await fetch('https://quickapp.amap.com/third/meta-card/navi-route', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    lng: originLng,
    lat: originLat,
    dest_lng: destLng,
    dest_lat: destLat,
    manufacture: 'hw_qingluan',
    travel_mode: travelMode // 可不传
  })
}).then(r => r.json());

// 3) 取关键字段，推送华为 webhook（data 触发工作流）
await pushToHuaweiWebhook({
  apiId,
  payload: convertAmapToPayload(amapResp)
});
```

## 8. 排错清单
- 看不到推送：
  - `X-Sign` 是否按 `ts` 计算；`ts` 是否毫秒；header 名称大小写是否正确。
  - `result.apiId` 是否填对（触发器页面可查）。
  - `pushText` 是否过长（平台有显示规格）。
- 点击推送进智能体但没有结果：
  - `parts.kind` 是否是 `"data"`（不是则不会触发工作流/插件）。
  - 工作流是否正确读取 `EVENT_INPUT.payload`。
- 高德返回为空或缺 drive/transit：
  - `travel_mode` 不传时应返回两种（PDF 描述），若只需要其一可传 `drive` 或 `transit`。
  - 起终点经纬度是否为字符串、精度是否合理。

## 9. 下一步建议（你给我 3 个信息我就能把文档改成“你项目专用版”）
1. 你希望展示“驾车”、“公交”，还是两者都展示？
2. 用户通勤起终点从哪里来：用户手填、定位、还是读取系统/日历？
3. 你打算把结果呈现为：纯文本、还是文本+按钮（深链到高德）？

