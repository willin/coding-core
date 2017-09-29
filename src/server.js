const Koa = require('koa');
const Router = require('koa-router');
const bodyparser = require('koa-bodyparser');
const { keys } = require('../config');
const session = require('./lib/session');
const errHandler = require('./lib/error');

const app = new Koa();
app.keys = keys;
app.proxy = true;
app.use(session(app));
app.use(bodyparser());
app.use(errHandler);

// 绑定路由
const router = new Router();
// routes(router);
app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
