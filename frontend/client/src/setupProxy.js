const { createProxyMiddleware } = require('http-proxy-middleware');

const host = process.env.HTTP_PROXY;

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://' + `${host}`,
      changeOrigin: true,
    })
  );
};