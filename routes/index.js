var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  client.get('my test key', function (error, result) {
    if (error) {
      console.log(error);
      throw error;
    }
    console.log('GET result ->' + result);
  });
  res.render('index', { title: 'Express' });

})

var redis = require('redis');
var client = redis.createClient(6379,"192.168.0.187");

client.on('connect', function() {
  console.log('Redis client connected');
});

client.on('error', function (err) {
  console.log('Something went wrong ' + err);
});

client.set('my test key', 'my test value', redis.print);


module.exports = router;
