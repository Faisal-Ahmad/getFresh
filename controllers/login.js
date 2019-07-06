var express = require('express');
<<<<<<< HEAD
var customer	= require.main.require('./models/customer-model');
var router = express.Router();

router.get('/', function(req, res){
	res.render('customer/login');
=======
var user	= require.main.require('./models/user-model');
var router = express.Router();


router.get('/', function(req, res){
	res.render('login/index');
>>>>>>> 4933ec92d0f806f5b3ff51d5391b8a3e6effcdae
});

router.post('/', function(req, res){
	
	var data = {
		username: req.body.username,
		password: req.body.password,
	};

<<<<<<< HEAD
	customer.validate(data, function(status){
		if(status){
			console.log(status);
			req.session.un = req.body.username;
			res.redirect('/customer');
=======
	user.validate(data, function(results){
		if(results){
			req.session.un = results[0].username;
			req.session.pass = results[0].password;
			req.session.dob = results[0].dob;
			req.session.email = results[0].email;
			req.session.sl = results[0].serial;
			
			//userinfo =results;
			//console.log(userinfo[0].username);
			res.redirect('/home');
>>>>>>> 4933ec92d0f806f5b3ff51d5391b8a3e6effcdae
		}else{
			res.send('invalid username/password...');
		}
	});

});
<<<<<<< HEAD
=======

>>>>>>> 4933ec92d0f806f5b3ff51d5391b8a3e6effcdae

module.exports = router;