var express = require('express');
var router = express.Router();

/* GET CONTACTO page. */
router.get('/', function(req, res, next) {
  res.render('fpersonal', { title: 'Seccion Formulario Personal'})
});

module.exports = router;