var express = require('express');
var supplier	= require.main.require('./models/supplier-model');
var router = express.Router();

router.get('/', function(req, res){
	supplier.getById('1000', function(result){
		if(result != null){
			res.render('supplier/index', {user: result[0]});		
		}else{
			res.send('Error!.. try again...');
		}
	});
	/*if(req.session.un != null){
		
		res.render('supplier/index');

	}else{
		res.redirect('/login');
	}*/
	//res.render('supplier/index');
	router.get('/add_product', function(req, res){

		res.render('supplier/add_product');
		});
	});
	router.post('/add_product', function(req, res){
		var data = {
			pname: req.body.name,
			pquantity : req.body.quantity,
			pprice : req.body.price
		}
		supplier.create(data, function(status){
			if(status){
				res.redirect('/supplier');			
			}else{
				res.send('Insert Problem');
			}
	
		});
	
		});


module.exports = router;