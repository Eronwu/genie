# 🧞 Genie — AI 创作平台

基于 [Agnes AI](https://platform.agnes-ai.com) 免费 API 的 AI 图片/视频生成平台。许个愿，Genie 帮你生成。

> ✨ Agnes AI 提供**无限期免费**的多模态 API，无需绑定信用卡。

## 🚀 使用方式

### 在线使用（GitHub Pages）

访问：**https://eronwu.github.io/genie**

首次打开会提示输入 API Key，去 [platform.agnes-ai.com](https://platform.agnes-ai.com/settings/apiKeys) 免费获取一个粘贴即可。Key 只保存在你的浏览器中，不会上传。

### 本地使用

```bash
git clone https://github.com/Eronwu/genie.git
cd genie
# 直接用浏览器打开 index.html，或用任意静态服务：
npx serve .
```

## 🎯 功能

| 功能 | 说明 |
|------|------|
| 🖼️ 图片生成 | 文生图 / 图生图，支持多种尺寸 |
| 🎬 视频生成 | 文生视频 / 图生视频，3~18 秒可选 |
| 📊 实时进度 | 视频生成自动轮询，进度条显示 |
| 🖼️ 本地画廊 | 自动保存作品到浏览器，支持预览下载 |
| 🔑 Key 隔离 | API Key 仅存浏览器 localStorage，不写入仓库 |
| ⌨️ 快捷键 | `Cmd/Ctrl + Enter` 一键生成 |

## 🛠️ 技术栈

纯静态 HTML/CSS/JS，零依赖，无需构建。浏览器直接调用 Agnes AI API。

## 🔐 隐私说明

- API Key 存储在浏览器 `localStorage` 中
- 不会上传到任何服务器
- 所有 API 请求直接从你的浏览器发往 Agnes AI
- 仓库代码中不包含任何 Key

## 📄 License

MIT
