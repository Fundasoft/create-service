const router = require('express').Router();
const demo = require('./demo/routes');

router.use(demo);

module.exports = router;
