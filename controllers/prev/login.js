var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.render('login/index');
});

router.post('/', function(req, res){
	
	/*var data = {
		username: req.body.Username,
		password: req.body.Password,
	};*/

	//res.redirect('/supplier/index');
	res.send('invalid username/password...');

});

module.exports = router;