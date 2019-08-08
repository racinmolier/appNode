var express = require('express');
var router = express.Router();

/* GET CONTACTO page. */
router.get('/', function(req, res, next) {
  res.render('farea', { title: 'Seccion Formulario de areas'})
});

module.exports = router;