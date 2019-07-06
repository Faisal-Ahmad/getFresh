var express = require('express');
var product	= require.main.require('./models/product-model');
var router = express.Router();

	router.get('/', function(req, res){
		
		product.getAll(function(results){
		if(results != null){
			res.render('product/index', {productlist: results});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});

module.exports = router;