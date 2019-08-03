var express = require('express');
var router = express.Router();

/* GET CONTACTO page. */
router.get('/', function(req, res, next) {
  res.render('proceso', { title: 'Seccion Proceso'})
});

module.exports = router;