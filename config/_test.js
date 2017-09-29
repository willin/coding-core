// koa cookie 密钥
exports.keys = ['HxrrLrA4OrIozYdlX5Ptkrm5kk8fnIA6'];
// koa 服务侦听配置
exports.server = {
  port: 9900,
  hostname: '127.0.0.1'
};
// redis 缓存配置
const redis = {
  host: '127.0.0.1',
  port: 6379,
  db: 1,
  ttl: 3600
};
exports.redis = redis;
// TODO: 暂未使用的预留项
// // MySQL 数据库配置
// exports.mysql = {
//   connectionLimit: 10,
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'root'
// };
// // 接口性能日志配置
// exports.logger = Object.assign({}, redis, {
//   db: 0,
//   ttl: 86400 * 365,
//   prefix: 'coding:'
// });
