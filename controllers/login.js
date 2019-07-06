var express = require('express');
var user	= require.main.require('./models/user-model');
var router = express.Router();


router.get('/', function(req, res){
	res.render('login/index');
});

router.post('/', function(req, res){
	
	var data = {
		username: req.body.username,
		password: req.body.password,
	};

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
		}else{
			res.send('invalid username/password...');
		}
	});

});


module.exports = router;