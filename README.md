# 雀步 Mahjong Steps

面向初学者和进阶玩家的交互式麻将课程与完整牌桌操练场。支持香港、四川血战到底、美式原创教学牌型和中国国标四种玩法；界面提供简体中文、繁体中文和英文。

## 在线体验

<https://francisling07.github.io/mahjong-steps-preview/>

本仓库使用 GitHub Pages：`main` 分支的仓库根目录为网站目录。推送到 `main` 后，GitHub 自动重新发布。网站是静态页面，无需构建或服务器。

## 本地开发

在本目录修改源码。可直接打开 `index.html` 查看页面；若浏览器限制 `file://`，可在本目录启动本地静态文件服务，或通过上面的公开测试地址验收。

提交更新：

```sh
git status
git pull --ff-only origin main
# 修改并运行相关测试
git add -A
git commit -m "说明本次修改"
git push origin main
```

推送后查看 [GitHub Actions](https://github.com/francisling07/mahjong-steps-preview/actions) 的 Pages 构建结果，再打开在线体验网址确认新版本。多人同时修改时，先拉取最新代码并解决冲突。

## 目录

- `course/`：四种玩法的课程、题库、规则和计分练习。
- `playground/`：完整牌桌、规则判定、出牌建议和练习对手。
- `assets/hongkong/`：麻将牌矢量图及素材署名。
- `qa/`：独立回归检查及验收记录。
- `deploy/`：曾用于局域网 HTTPS 预览的服务配置；公开网站由 GitHub Pages 发布。

浏览器自动化脚本需要先运行 `npm install` 和 `npx playwright install chromium`；已有 Chrome 时可通过 `CHROME_BIN` 指定浏览器可执行文件。普通课程和牌桌检查只需要 Node.js。

## 核心检查

需要 Node.js。进入本目录后运行：

```sh
node qa/playground-bot-check.cjs
node qa/playground-full-check.cjs
node qa/mcr-course-check.cjs
node qa/mcr-playground-check.cjs
node qa/course-continuation-check.cjs
```

本项目是教学测试版。国标牌桌自动计分覆盖已验证的常用番种，美式牌型为原创教学卡样；正式竞技请以对应规则原文和当场裁判为准。
