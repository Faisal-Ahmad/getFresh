var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	/*if(req.session.un != null){
		
		res.render('supplier/index');

	}else{
		res.redirect('/login');
	}*/
	res.render('supplier/index');
});


module.exports = router;