var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
<<<<<<< HEAD
=======
	
>>>>>>> 4933ec92d0f806f5b3ff51d5391b8a3e6effcdae
	req.session.un = null;
	res.redirect('/login');
});

module.exports = router;