# -kv
`curl -kv` 里的两个参数通常是：

- `-k`：允许不安全的 TLS/SSL 连接。也就是忽略证书校验错误，比如自签名证书、证书过期、域名不匹配等。
- `-v`：verbose，显示详细调试信息，包括 DNS、TCP/TLS 握手、请求头、响应头等。

所以：

```bash
curl -kv https://example.com
```

意思是：用 `curl` 请求这个 HTTPS 地址，**即使证书有问题也继续连接**，并且**打印详细连接过程**。

常用于排查 HTTPS、证书、代理、接口连通性问题。注意 `-k` 会降低安全性，生产或正式验证时不建议长期使用。

# -sSL
`curl -sSL` 通常是三个参数连写：

- `-s`：silent 静默模式，不显示进度条和普通错误信息。
- `-S`：show error，配合 `-s` 使用；失败时仍然显示错误。
- `-L`：follow redirect，自动跟随 HTTP 重定向，比如 `301`、`302`。

所以：

```bash
curl -sSL https://example.com
```

意思是：安静地请求这个地址，**如果发生重定向就继续跟过去**，但**出错时仍打印错误信息**。

常见于下载安装脚本，例如：

```bash
curl -sSL https://example.com/install.sh | bash
```

这里 `-sS` 让输出更干净但失败可见，`-L` 确保下载链接跳转后也能拿到最终内容。


# -I
只获取 HTTP 响应头（Headers），不下载正文内容。
常见用途

1. 测试网站是否可访问
curl -I https://github.com

快速看：

能不能连接
返回是不是 200
有没有 403 / 404 / 502