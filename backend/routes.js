var express = require('express');
var router = express.Router();

var email = require('./controllers/email.js');

router.post('/addEmail', email.send);

module.exports = router;
