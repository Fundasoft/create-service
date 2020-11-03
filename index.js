const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const api = require('./src/components');

/**
 * Global middlewares
 */
app.use(bodyParser.json());

/**
 * Base route
 */
app.use('/api', api);

/**
 * Start server
 */
if (!module.parent) {
  const server = app.listen(8080, () => {
    const port = server.address().port;
    console.log('App listening at http://localhost:%s', port);
  });
}

module.exports = app;
