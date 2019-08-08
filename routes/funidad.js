var express = require('express');
var router = express.Router();

/* GET CONTACTO page. */
router.get('/', function(req, res, next) {
  res.render('funidad', { title: 'Seccion Formulario de Unidad'})
});

module.exports = router;