const { createProxyMiddleware } = require('http-proxy-middleware');

const host = process.env.HTTP_PROXY;
const protocol = process.env.PROTOCOL;

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `${protocol}${host}`,
      changeOrigin: true,
    })
  );
};