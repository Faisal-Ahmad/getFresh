var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.render('register/index');
});

module.exports = router;