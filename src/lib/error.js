const { isEmpty } = require('@dwing/common');

const ENV = process.env.NODE_ENV || 'development';

module.exports = async (ctx, next) => {
  /* istanbul ignore next 开发环境设置不进行覆盖 */
  if (ENV === 'development') {
    ctx.set('Access-Control-Allow-Origin', '*');
  }
  try {
    await next();
    if (isEmpty(ctx.data) && ctx.status >= 400) {
      // 捕获 40x 错误
      ctx.status = ctx.status;
      ctx.body = { status: 0, code: ctx.code || ctx.status };
      return;
    }
    ctx.body = { status: 1, data: ctx.data };
  } catch (err) /* istanbul ignore catch 非常规异常捕获代码不进行用例覆盖 */ {
    // eslint-disable-next-line no-console
    console.error(err);
    // 捕获 500 错误
    ctx.status = 500;
    ctx.body = {
      status: 0,
      code: ctx.code || 500
    };
  }
};
