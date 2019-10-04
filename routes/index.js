var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})
var redis = require('redis');
var client = redis.createClient();

client.on('connect', function() {
  console.log('Redis client connected');
});

client.on('error', function (err) {
  console.log('Something went wrong ' + err);
});

client.set('my test key', 'my test value', redis.print);
client.get('my test key', function (error, result) {
  if (error) {
    console.log(error);
    throw error;
  }
  console.log('GET result ->' + result);
});

module.exports = router;
