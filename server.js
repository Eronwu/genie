require('dotenv').config();

const express = require('express');
const https = require('https');
const { HttpsProxyAgent } = require('https-proxy-agent');

const app = express();
const PORT = process.env.PORT || 3000;

const API_BASE = 'apihub.agnes-ai.com';
const API_KEY = process.env.AGNES_API_KEY;

if (!API_KEY) {
  console.error('❌ 错误: 请设置 AGNES_API_KEY 环境变量');
  console.error('   方式1: 创建 .env 文件，写入 AGNES_API_KEY=你的key');
  console.error('   方式2: export AGNES_API_KEY=你的key');
  console.error('   免费获取: https://platform.agnes-ai.com/settings/apiKeys');
  process.exit(1);
}

// Auto-configure proxy from env (supports Clash, Surge, etc.)
const PROXY_URL = process.env.https_proxy || process.env.HTTPS_PROXY || process.env.http_proxy || process.env.HTTP_PROXY || null;
const PROXY_AGENT = PROXY_URL ? new HttpsProxyAgent(PROXY_URL) : null;
if (PROXY_AGENT) {
  console.log('🔌 使用代理:', PROXY_URL);
}

app.use(express.json({ limit: '50mb' }));
app.use(express.static('public'));

// ---------- API Helper ----------
function apiRequest(method, path, body = null) {
  return new Promise((resolve, reject) => {
    const headers = {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    };

    const bodyStr = body ? JSON.stringify(body) : null;
    if (bodyStr) headers['Content-Length'] = Buffer.byteLength(bodyStr);

    const opts = {
      hostname: API_BASE,
      path: path,
      method: method,
      headers: headers,
      agent: PROXY_AGENT,
    };

    const req = https.request(opts, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve({ status: res.statusCode, ok: res.statusCode >= 200 && res.statusCode < 300, data: json });
        } catch (e) {
          resolve({ status: res.statusCode, ok: false, data: { error: 'Invalid JSON response' } });
        }
      });
    });

    req.on('error', (e) => reject(e));
    req.setTimeout(120000, () => { req.destroy(); reject(new Error('Request timeout')); });

    if (bodyStr) req.write(bodyStr);
    req.end();
  });
}

// ---------- Image Generation ----------
app.post('/api/images/generations', async (req, res) => {
  try {
    const { status, ok, data } = await apiRequest('POST', '/v1/images/generations', req.body);

    if (!ok) {
      return res.status(status).json({ error: data });
    }

    const imageUrl = data.data?.[0]?.url || data.url || null;
    res.json({ success: true, imageUrl, raw: data });

  } catch (err) {
    console.error('[image] error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// ---------- Video: Create Task ----------
app.post('/api/videos', async (req, res) => {
  try {
    const { status, ok, data } = await apiRequest('POST', '/v1/videos', req.body);

    if (!ok) {
      return res.status(status).json({ error: data });
    }

    const taskId = data.id || data.task_id;
    console.log('[video] task created:', taskId);
    res.json({ success: true, taskId, raw: data });

  } catch (err) {
    console.error('[video] create error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// ---------- Video: Poll Task ----------
app.get('/api/videos/:taskId', async (req, res) => {
  try {
    const { status, ok, data } = await apiRequest('GET', `/v1/videos/${req.params.taskId}`);

    if (!ok) {
      return res.status(status).json({ error: data });
    }

    const videoUrl = data.remixed_from_video_id || data.video_url || null;
    res.json({
      success: true,
      status: data.status,
      progress: data.progress || 0,
      videoUrl,
      error: data.error,
      raw: data,
    });

  } catch (err) {
    console.error('[video] poll error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`\n🎨  创作平台已启动:  http://localhost:${PORT}\n`);
});
