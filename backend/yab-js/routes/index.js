var express = require('express');
var models  = require('../models');
var router = express.Router();

router.get('/', function(req, res) {
  models.Post.findAll().then(function(posts) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ 'status': true, 'posts': posts }));
  });
});

module.exports = router;
