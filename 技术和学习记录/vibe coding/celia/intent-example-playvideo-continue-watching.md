# 意图框架落地示例：视频“继续观看 / 播放视频（PlayVideo）”

这篇文档把“意图框架白皮书 + 各垂域意图 Schema”里的信息，落到一个可操作的端到端案例：视频应用把“用户刚看过/经常看的内容”共享给系统，让系统在小艺建议等入口推荐“继续观看”卡片；用户点击后系统再调用应用直达播放页。

## 1. 场景目标（你想实现的体验）
- 用户看视频中途退出或看完。
- 系统在合适时机（例如晚间、通勤、用户空闲）在“小艺建议”等入口展示“继续观看”卡片（系统模板卡，开发者通常不需要自己画卡片样式）。
- 用户点卡片，直接拉起你 App 播放对应视频，并从上次进度继续。

## 2. 选用的意图与依据
本例使用视频垂域里常见的意图组合：
- `PlayVideo`：播放视频（用于意图调用、意图共享）
- 可选补充：`SearchVideo`（用于系统/小艺侧的“找视频”场景）

字段依据来自“各垂域意图Schema.zip”中的 `视频垂域Schema.xlsx`（由官方文档“各垂域意图Schema”页面提供下载）。

## 3. 落地前的准备（操作级别）
1. 确认产品链路：你是要做“推荐卡片”（依赖意图共享），还是只做“系统能拉起播放”（只做意图调用）。
2. 在业务侧确认实体唯一标识：
   - `entityId`：视频唯一标识（官方 Schema 提到限长 64 字符）。
   - `entityGroupId`：用于批量管理/删除（例如同一剧集、同一栏目、同一用户数据分组）。
3. 确认你能提供的元数据（用于卡片展示与推荐排序）：
   - 标题、描述、封面图 URL、关键词等。
   - `expirationTime`（失效时间）与 `metadataModificationTime`（最后更新时间）。
4. 规划埋点触发点（最关键）：
   - 共享“完成时”：用户刚刚播放过 / 最近播放。
   - 共享“将来时”：用户预约想看 / 加入片单 / 预告片提醒（可选）。

## 4. 数据怎么组织（字段级别）

### 4.1 意图调用（端侧）输入示例
官方视频 Schema 在“意图调用(端-前台)”里给出核心输入字段：
- `entityId`：必选，视频唯一标识
- `extras`：可选，业务自定义扩展信息

示例（JSON，仅示意结构）：
```json
{
  "entityId": "12949589",
  "extras": {
    "resumePositionMs": 523000,
    "source": "xiaoYiSuggestion"
  }
}
```

你在应用端需要做的事（操作/代码要点）：
- 从系统传入参数里取出 `entityId` 和 `extras`。
- 用 `entityId` 定位视频内容。
- 根据 `extras.resumePositionMs`（若你选择支持）跳转到指定进度并播放。

### 4.2 意图共享（端侧）整体结构
白皮书示例页展示“端侧意图共享接口”包括：
- `shareIntent(InsightIntent)`：新增共享记录（可批量）
- `deleteIntent(InsightIntent)`：按意图/标识删除共享记录
- `deleteEntity(InsightIntent)`：按实体删除（删除后相关实体的搜索与推荐能力将不再支持）

视频 Schema 中 `PlayVideo` 的意图共享字段分两块：
1. 意图公共字段（示例能看到）
   - `intentName`: `PlayVideo`
   - `intentVersion`: 示例为 `"1.0.1"`
   - `identifier`: 共享记录唯一标识（建议 UUID）
2. `intentActionInfo`：动作时态与时间段
   - `actionMode`: `EXECUTED`（完成时）或 `EXPECTED`（将来时）
   - `executedStartTime` / `executedEndTime`（当 `EXECUTED` 时必选）
   - `expectedStartTime` / `expectedEndTime`（当 `EXPECTED` 时使用；Schema 示例为数组）
3. `intentEntityInfo`：实体信息（视频卡片展示与推荐）
   - `entityName`: `Video`
   - `entityId`
   - `entityGroupId`
   - `keywords`
   - `expirationTime`
   - `metadataModificationTime`
   - `activityType`：示例给出取值范围 `"1"` 最近播放、`"2"` 已收藏、`"3"` 本地下载、`"4"` 已关注
   - 更多视频元数据（示例页能看到）：`videoName`、`director`、`artists`、`category`、`tags`、`playType`、`score`、`summary`、`videoPlayCount`、`videoEpisode`、`duration`、`videoAttribute`、`region`、`publishTime`、`videoImage`、`totalCount`

## 5. 端侧实现（伪代码，可直接照着改）
说明：不同版本 SDK 的包名/类名可能不同。下面代码只固化“字段名与调用时机”，API/类型以你接入时的实际 SDK 为准。

### 5.1 在播放行为发生时做“完成时”意图共享
触发时机建议：
- 用户开始播放后 N 秒（过滤误触）
- 播放退出/切后台/播放结束时（确保有进度）

```ts
// Pseudocode
function onPlaybackStopped(video: VideoMeta, progressMs: number, startMs: number, endMs: number) {
  const insightIntent = {
    // 意图公共字段
    intentName: "PlayVideo",
    intentVersion: "1.0.1",
    identifier: uuid(), // 建议 UUID

    // 动作信息：完成时
    intentActionInfo: {
      actionMode: "EXECUTED",
      executedStartTime: startMs,
      executedEndTime: endMs
    },

    // 实体信息：用于卡片展示与推荐
    intentEntityInfo: {
      entityName: "Video",
      entityId: video.entityId,
      entityGroupId: video.groupId,
      keywords: video.keywords, // 例如 ["谍战","王一博"]
      videoName: video.title,
      summary: video.summary,
      videoImage: video.coverUrl,
      expirationTime: String(video.expirationTimeMs),
      metadataModificationTime: String(Date.now()),
      activityType: "1", // 最近播放
      // 可选扩展：导演、演员、分类、标签等
    }
  };

  // 白皮书示例页：shareIntent(InsightIntent)
  IntentsKit.shareIntent(insightIntent);
}
```

### 5.2 用户清理历史/注销账号时删除共享数据
```ts
function onUserClearHistory(identifiers: string[]) {
  for (const id of identifiers) {
    IntentsKit.deleteIntent({
      intentName: "PlayVideo",
      intentVersion: "1.0.1",
      identifier: id
    });
  }
}

function onUserLogoutOrRevokeAll(groupId: string) {
  IntentsKit.deleteEntity({
    entityName: "Video",
    entityGroupId: groupId
  });
}
```

### 5.3 处理系统的“意图调用”，直达播放页
你的应用需要实现一个“被系统拉起后能解析意图参数并导航”的入口（具体形态取决于你的工程是 App 还是元服务）。

逻辑要点：
1. 解析系统传入的 `entityId`。
2. 解析 `extras`（如果有）。
3. 路由到播放页并恢复进度。

```ts
// Pseudocode
function onIntentInvoked(params: { entityId: string; extras?: Record<string, unknown> }) {
  const videoId = params.entityId;
  const resumePositionMs = Number(params.extras?.resumePositionMs ?? 0);
  navigateToPlayer(videoId, { resumePositionMs });
}
```

## 6. 联调与验证（操作级别）
1. 先验证“意图调用”闭环：
   - 手工构造拉起参数（或用系统调试能力）确认能从 `entityId` 直达播放页。
2. 再验证“意图共享”是否成功上报：
   - 在播放退出时调用 `shareIntent`，记录本地日志（identifier、entityId、actionMode、时间戳）。
3. 验证“推荐卡片”展示：
   - 该步骤与系统版本、入口策略、是否需要白名单/灰度有关。若短时间内看不到卡片，先确认共享数据格式与必填字段满足 Schema，再排查账号/设备是否具备分发条件。

## 7. 常见坑（经验向）
- `identifier` 不稳定：不要每次上报同一条记录都换 identifier，否则你无法精准删除或更新。
- 时间字段单位不一致：Schema 示例为时间戳（毫秒）风格，确保你传入单位与 SDK 要求一致。
- `expirationTime` 没设或过短：会导致数据很快失效，推荐效果不稳定。
- `entityId` 不是全局唯一：一旦复用会出现“点卡片跳错内容”的严重问题。

