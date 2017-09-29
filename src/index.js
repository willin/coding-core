const app = require('./server');
const { server: serverOpts } = require('../config');

app.listen(serverOpts);
