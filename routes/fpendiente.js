var express = require('express');
var router = express.Router();

/* GET CONTACTO page. */
router.get('/', function(req, res, next) {
  res.render('fpendiente', { title: 'Seccion Personal'})
});

module.exports = router;