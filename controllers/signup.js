var express = require('express');
var user = require.main.require('./models/user-model');
var router = express.Router();


router.get('/', function(req, res){
	
	//req.session.un = null;
	res.render('signup/index');
});


router.post('/', function(req, res){
	var data = {
		id: req.body.id,
		username: req.body.username,
		password: req.body.password
		
	}

	user.create(data,function(status){
      console.log(req.body.username);
		if(status){
			res.send('registration successful');			
		}else{
			//console.log(req.body.username);
			res.send('Error!.. try again...');
		}
	});
});


module.exports = router;