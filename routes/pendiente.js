var express = require('express');
var router = express.Router();

/* GET CONTACTO page. */
router.get('/', function(req, res, next) {
  res.render('pendiente', { title: 'Seccion Pendiente'})
});

module.exports = router;