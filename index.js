const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

app.use('/githubApi', createProxyMiddleware({ 
  target: 'https://github.com',
  changeOrigin: true,
  pathRewrite: {
    '^/githubApi': ''
  }
}));

app.use('*', (req, res) => {
    res.send({ result: -1 });
})

app.listen(8899, () => {
  console.log('Server started on http://localhost:8899');
});