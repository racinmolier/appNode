var express = require('express');
var router = express.Router();

/* GET CONTACTO page. */
router.get('/', function(req, res, next) {
  res.render('area', { title: 'Seccion Area'})
});

module.exports = router;