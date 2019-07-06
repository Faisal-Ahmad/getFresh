var express = require('express');
var customer = require.main.require('./models/customer-model');
var product = require.main.require('./models/product-model');
var router = express.Router();

/*
router.get('/', function(req, res){

	if(req.session.un != null){
		
		res.render('customer/index');

	}else{
		res.redirect('/login');
	}
});
*/
router.get('*', function(req, res, next){

	if(req.session.un != null){
		next();
	}else{
		res.redirect('/home');
	}
});

router.get('/', function(req, res){
	var data={
    	username:req.session.un
    }
	customer.getByUn(data, function(results){
		if(results != null){
			res.render('customer/index', {userList: results});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});


router.get('/profile', function(req, res){

	customer.getById(req.params.id, function(results){
		if(results != null){
			res.render('customer/customerProfile', {userList: results});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});
router.get('/editProfile', function(req, res){
	var data ={
		username:req.session.un
	}
	customer.getByUn(data, function(result){
		if(result.length > 0){
			res.render('customer/editProfile', {user: result[0]});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});

router.post('/editProfile', function(req, res){
    var data = {
		name: req.body.name,
		contactnumber: req.body.contactnumber,
		email: req.body.email,
		address: req.body.address,
        username:req.session.un
	};
	
	customer.updateCustomer(data, function(status){

		if(status){
			res.redirect('/customer');			
		}else{
			res.send("Error");
		}
	});
});

router.get('/changePassword', function(req, res){
	var data ={
		username:req.session.un
	}
	customer.getByUn(data, function(result){
		if(result.length > 0){
			res.render('customer/changePassword', {user: result[0]});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});

router.post('/changePassword', function(req, res){
    var data = {
		password: req.body.password,
        username:req.session.un
	};
	
	customer.changePassword(data, function(status){

		if(status){
			res.redirect('/customer');			
		}else{
			res.send("Error");
		}
	});
});


router.get('/availableProduct', function(req, res){
	product.getAll(function(result){
		if(result.length > 0){
			res.render('customer/availableProduct', {userList: result});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});

router.post('/availableProduct', function(req, res){
    var data = {
		password: req.body.password,
        username:req.session.un
	};
	
	customer.changePassword(data, function(status){

		if(status){
			res.redirect('/customer');			
		}else{
			res.send("Error");
		}
	});
});







router.get('/user_list', function(req, res){

	customer.getAll(function(results){
		if(results != null){
			res.render('customer/userList', {userList: results});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});
/*
router.get('/login', function(req, res){
		res.render('customer/login');			
});

router.post('/login', function(req, res){
	
	var data = {
			username: req.body.username,
			password: req.body.password,
		};

		customer.validate(data, function(status){
			if(status){
				req.session.un = req.body.username;
				res.redirect('/customer');
			}else{
				res.send('invalid username/password...');
			}
		});
});
*/
router.get('/registration', function(req, res){
		res.render('customer/registration');			
});

router.post('/registration', function(req, res){
	
	var data = {
		username: req.body.username,
		password: req.body.password,
		name: req.body.name,
		contactnumber: req.body.contactnumber,
		email: req.body.email,
		address: req.body.address
	};

	customer.customerCreate(data, function(status){

		if(status){
			res.redirect('/customer');			
		}else{
			res.redirect('/customer/registration');
		}
	});
});

router.get('/order/:id', function(req, res){
	product.getById(req.params.id, function(result){
		if(result != null){
			var data = {
				id: result[0].id,
				name: result[0].name,
				description: result[0].description, 
				price: result[0].price,
			};
			product.orderCreate(data, function(status){
				console.log(data);
				if(status){
					product.getAll(function(result){
						if(result.length > 0){
							res.render('customer/orderedProduct', {userList: result});			
						}else{
							res.send('Error!.. try again...');
						}
					});		
				}else{
					res.send('Error!.. try again...');
				}
			});	
		}else{
			res.send('Error!.. try again...');
		}
	});
});
router.get('/orderedPro', function(req, res){
	product.getAll(function(result){
		if(result.length > 0){
			res.render('customer/orderedProduct', {userList: result});			
		}else{
			res.send('Error!.. try again...');
		}
	});		
});

router.get('/cartPro', function(req, res){
	product.getAll(function(result){
		if(result.length > 0){
			res.render('customer/cartProduct', {userList: result});			
		}else{
			res.send('Error!.. try again...');
		}
	});		
});
router.get('/cart/:id', function(req, res){
	product.getById(req.params.id, function(result){
		if(result != null){
			var data = {
				id: result[0].id,
				name: result[0].name,
				description: result[0].description, 
				price: result[0].price,
			};
			product.cartCreate(data, function(status){
				console.log(data);
				if(status){
					product.getAll(function(result){
						if(result.length > 0){
							res.render('customer/cartProduct', {userList: result});			
						}else{
							res.send('Error!.. try again...');
						}
					});		
				}else{
					res.send('Error!.. try again...');
				}
			});	
		}else{
			res.send('Error!.. try again...');
		}
	});
});


router.get('/edit/:id', function(req, res){

	customer.getById(req.params.id, function(result){
		if(result != null){
			res.render('home/edit', {user: result[0]});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});

router.post('/edit/:id', function(req, res){
	
	var data = {
		username: req.body.uname,
		password: req.body.password,
		id: req.params.id
	};

	customer.update(data, function(status){

		if(status){
			res.redirect('/home/user_list');			
		}else{
			res.redirect('/home/edit/'+req.params.id);
		}
	});
});

router.get('/delete/:id', function(req, res){

	customer.delete(req.params.id, function(status){
		if(status){
			res.redirect('/home/user_list');			
		}else{
			res.send('Error!.. try again...');
		}
	});
});

module.exports = router;