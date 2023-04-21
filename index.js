const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/githubApi', createProxyMiddleware({ 
  target: 'https://github.com',
  changeOrigin: true
}));

app.listen(8899, () => {
  console.log('Server started on http://localhost:8899');
});