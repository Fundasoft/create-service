const router = require('express').Router();

const { getSomething } = require('./controller');

router.get('/demo', getSomething);

module.exports = router;
