var express = require('express');
var customer	= require.main.require('./models/customer-model');
var router = express.Router();

router.get('/', function(req, res){
	res.render('customer/login');
});

router.post('/', function(req, res){
	
	var data = {
		username: req.body.username,
		password: req.body.password,
	};

	customer.validate(data, function(status){
		if(status){
			console.log(status);
			req.session.un = req.body.username;
			res.redirect('/customer');
		}else{
			res.send('invalid username/password...');
		}
	});

});

module.exports = router;