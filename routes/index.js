var express = require('express');
var router = express.Router();
var redis = require('redis');
var client = redis.createClient(6379,"localhost");
/* GET home page. */
router.get('/', function(req, res, next) {
  client.set('1', 'my test value', redis.print);
  client.get('1', function (error, result) {
    if (error) {
      console.log(error);
      throw error;
    }
    console.log('GET result ->' + result);
  });
  res.render('index', { title: 'Express' });

})

client.on('connect', function() {
  console.log('Redis client connected');
});

client.on('error', function (err) {
  console.log('Something went wrong ' + err);
});




module.exports = router;
