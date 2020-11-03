const Service = require('./service');

exports.getSomething = function getSomething(req, res) {
  Service.getSomething(res.send.bind(res));
};
