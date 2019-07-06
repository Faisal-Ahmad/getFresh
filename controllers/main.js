var express = require('express');
var router = express.Router();

// ######## dashboard ###########

router.get('/login', function(req, res){
	res.send('welcome to login page');
});

// ######## login page ###########

router.get('/signup', function(req, res){
	res.send('welcome to signup page');
});

// ######## register page ###########

router.get('/', function(req, res){
	res.send('welcome to dashboard page');
});


// ############## 404 page ###########

router.get('*',function(req,res){
	res.send('404 error');
})

module.exports = router;