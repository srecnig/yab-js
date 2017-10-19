var express = require('express');
var models  = require('../models');
var router = express.Router();

router.get('/', function(req, res) {
  models.Post.findAll().then(function(posts) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ 'status': true, 'posts': posts }));
  });
});

// router.get('/new', function(req, res) {
//   models.Post.create({
//     title: 'This is the title',
//     body: 'This is the super long body'
//   }).then(function(post) {
//     res.setHeader('Content-Type', 'application/json');
//     res.send(JSON.stringify({ 'status': true, 'post': post }));
//   });
// });

module.exports = router;
