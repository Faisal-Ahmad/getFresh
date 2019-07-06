var express = require('express');
var user = require.main.require('./models/user-model');
var router = express.Router();


router.get('/', function(req, res){

	if(req.session.un != null){
		//uname=userinfo[0].username;
	//console.log(uname);
		res.render('home/index' ,{uname: req.session.un,upass:req.session.pass,udob: req.session.dob,umail:req.session.email,usl:req.session.sl});
	
	}else{
		res.redirect('/login');
	}
});

router.get('/user_list', function(req, res){

	user.getAll(function(results){

		if(results != null){
			console.log(results);
			res.render('home/userList', {userList: results});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});

router.get('/edit/:usl', function(req, res){

	user.getById(usl, function(result){
		console.log("gshfs"+usl);

		if(result != null){
			res.render('home/edit', {user: result[0]});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});

router.post('/edit/:usl', function(req, res){
	
	var data = {
		username: uname,
		password: upass,
		serial: usl
	}
	user.update(data, function(status){
console.log("gshfs"+usl);
		if(status){
			res.redirect('/home/user_list');			
		}else{
			res.redirect('/home/edit/'+req.params.serial);
		}

	});
});




router.get('/home/delete', function(req, res){

	var sql = "select * from user";

	db.getResult(sql, function(results){

		if(results != null){
			res.render('home/userList', {userList: results});			
		}else{
			res.send('Error!.. try again...');
		}

	});
});





module.exports = router;