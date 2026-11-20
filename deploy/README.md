# 可选的局域网 HTTPS 预览

这个目录保留了曾用于局域网预览的 Python 静态服务示例。公开网站由 GitHub Pages 发布，不依赖这里的服务。

如需在自己的 Linux 机器上使用：

1. 将 `serve_https.py` 和构建后的静态网站放在同一个工作目录；网站文件放进 `current/`。
2. 把自行签发的证书和私钥分别放在 `tls/server.crt`、`tls/server.key`，不要提交私钥。
3. 按需修改 `mahjong-steps.service` 的用户目录和监听端口，再用用户级 systemd 启用。

示例服务监听 8443。自签名证书会触发浏览器信任警告，只适合受控环境中的临时预览。
