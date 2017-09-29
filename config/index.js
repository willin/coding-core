// eslint-disable-next-line import/no-dynamic-require
const options = require(`./_${process.env.NODE_ENV || 'development'}`);

module.exports = options;
