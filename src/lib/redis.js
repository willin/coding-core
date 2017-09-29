const redis = require('@dwing/redis');
const { redis: redisOptions } = require('../../config');

module.exports = redis(redisOptions);
