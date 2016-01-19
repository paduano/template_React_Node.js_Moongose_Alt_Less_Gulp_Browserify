var express = require('express');
var router = express.Router();
var swig  = require('swig');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var page = swig.renderFile('views/index.html', {});
  res.status(200).send(page);
});

module.exports = router;
