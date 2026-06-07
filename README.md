# 🎨 AI 创作平台

基于 [Agnes AI](https://platform.agnes-ai.com) 免费 API 的 AI 图片/视频生成平台。支持文生图、图生图、文生视频、图生视频。

> ✨ Agnes AI 提供**无限期免费**的多模态 API，无需绑定信用卡。

## 🚀 快速开始

### 1. 获取 API Key

访问 [https://platform.agnes-ai.com/settings/apiKeys](https://platform.agnes-ai.com/settings/apiKeys) 注册并获取免费 API Key。

### 2. 配置

```bash
# 克隆项目
git clone https://github.com/Eronwu/aidemo.git
cd aidemo

# 安装依赖
npm install

# 配置 API Key
cp .env.example .env
# 编辑 .env 文件，填入你的 API Key
```

### 3. 启动

```bash
npm start
```

浏览器打开 **http://localhost:3000**

## 🎯 功能

| 功能 | 说明 |
|------|------|
| 🖼️ 图片生成 | 文生图 / 图生图，支持多种尺寸 |
| 🎬 视频生成 | 文生视频 / 图生视频，3~18 秒可选 |
| 📊 实时进度 | 视频生成自动轮询，进度条显示 |
| 🖼️ 本地画廊 | 自动保存作品到浏览器，支持预览下载 |
| ⌨️ 快捷键 | `Cmd/Ctrl + Enter` 一键生成 |

## 🛠️ 技术栈

- **后端**: Node.js + Express（API 代理）
- **前端**: 原生 HTML/CSS/JS（无框架依赖）
- **AI**: Agnes AI API（图片 + 视频生成）

## 📁 项目结构

```
aidemo/
├── server.js           # Express 后端，代理 API 请求
├── public/
│   └── index.html      # 前端界面
├── .env.example        # 环境变量示例
├── package.json
└── README.md
```

## 📝 环境变量

| 变量 | 说明 | 必需 |
|------|------|------|
| `AGNES_API_KEY` | Agnes AI 的 API Key | ✅ |
| `PORT` | 服务端口，默认 3000 | ❌ |

## 📄 License

MIT
