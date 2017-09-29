const { readdirSync } = require('fs');

const auth = (ctx, next) => {
  // 判断登录状态, 用户权限
  if (!ctx.session.accessToken) {
    ctx.code = 'REQUEST_FORBIDDEN';
    return ctx.status = 403;
  }
  return next();
};

const files = readdirSync(__dirname);
export default (app) => {
  // app.prefix('/api');
  files.forEach((file) => {
    if (file.endsWith('.js') && !file.startsWith('index')) {
      if (!file.startsWith('oauth')) {
        const module = file.replace('.js', '');
        app.use(`/${module}`, auth(module));
      }
      // eslint-disable-next-line import/no-dynamic-require, global-require
      require(`./${file}`)(app);
    }
  });
};
