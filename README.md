# 🧞 Genie — AI 创作平台

基于 [Agnes AI](https://platform.agnes-ai.com) 免费 API 的 AI 图片/视频生成平台。支持文生图、图生图、文生视频、图生视频。许个愿，Genie 帮你生成。

> ✨ Agnes AI 提供**无限期免费**的多模态 API，无需绑定信用卡。

## 🌐 在线体验

👉 **[eronwu.github.io/genie](https://eronwu.github.io/genie)**

打开即用，首次输入 API Key 即可。Key 只保存在你的浏览器中，不会上传。

## 🚀 本地运行

```bash
git clone https://github.com/Eronwu/genie.git
cd genie
npm install
cp .env.example .env   # 填入 API Key
npm start              # → http://localhost:3000
```

## 🎯 功能

| 功能 | 说明 |
|------|------|
| 🖼️ 图片生成 | 文生图 / 图生图，多种模型和尺寸可选 |
| 🎬 视频生成 | 文生视频 / 图生视频，3~18 秒可选 |
| 📋 任务队列 | 多视频并行排队，刷新自动恢复 |
| 📊 智能进度 | 排队/生成两阶段进度 + 预估剩余时间 |
| 🖼️ 本地画廊 | 自动保存作品，点击预览放大 |
| ⌨️ 快捷键 | `Cmd/Ctrl + Enter` 一键生成 |

## 🛠️ 技术栈

- **前端**：纯静态 HTML/CSS/JS，Rough.js 手绘风格
- **后端**（本地版）：Node.js + Express（API 代理）
- **线上版**：GitHub Pages，浏览器直连 API
- **AI**：Agnes AI API（图片 + 视频生成）

## 📁 分支

| 分支 | 用途 | 部署 |
|------|------|------|
| [`gh-pages`](https://github.com/Eronwu/genie/tree/gh-pages) | 纯静态线上版 | GitHub Pages |
| `main` | Node.js 本地版 | 本地 `npm start` |

## 📄 License

MIT
