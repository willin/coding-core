const session = require('koa-session');
const { JSONparse } = require('@dwing/common');
const redis = require('./redis');

module.exports = app => session({
  store: {
    maxAge: 2592000000,
    get: async (key) => {
      const result = await redis.get(`coding:sess:${key}`);
      return JSONparse(result || '{}');
    },
    set: async (key, sess, maxAge = 2592000) => await redis.setex(`coding:sess:${key}`, maxAge, JSON.stringify(sess)),
    destroy: async key => await redis.del(`coding:sess:${key}`)
  }
}, app);
