var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});
/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});
/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

module.exports = router;
