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
		var userId = '1000';
		res.render('supplier/add_product',{userId});
		});
	});
	router.post('/add_product', function(req, res){
		console.log(req.body.date.value);
		var data = {
			userId : req.body.userId,
			date:req.body.date.value,
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
	router.get('/view_product', function(req, res){

		supplier.getAll(function(results){
		if(results != null){
			res.render('supplier/view_product', {productlist: results});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});
router.get('/edit/:id', function(req, res){

	supplier.getByproductId(req.params.id, function(result){
		if(result != null){
			res.render('supplier/edit', {product: result[0]});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});
router.post('/edit/:id', function(req, res){
	
	var data = {
		pname: req.body.name,
		pquantity: req.body.quantity,
		pprice: req.body.price,
		id: req.params.id
	};

	supplier.update(data, function(status){

		if(status){
			res.redirect('/supplier/view_product');			
		}else{
			res.redirect('/supplier/edit/'+req.params.id);
		}
	});
});
router.get('/delete/:id', function(req, res){

	supplier.delete(req.params.id, function(status){
		if(status){
			res.redirect('/supplier/view_product');			
		}else{
			res.send('Error!.. try again...');
		}
	});
});

module.exports = router;