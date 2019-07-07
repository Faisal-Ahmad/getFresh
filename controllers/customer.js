var express = require('express');
var customer	= require.main.require('./models/customer-model');
var router = express.Router();

// ##### add item to cart

router.get('/', function(req, res){
    /*if(req.session.id)
    {
        res.render('customer/index');
    }
    else
    {
        res.redirect('/login');
    }*/
    customer.getById('1', function(result){
		if(result != null){
			res.render('customer/index', {user: result[0]});		
		}else{
			res.send('Error!.. try again...');
		}
        });
});
router.get('/view_product',function(req,res){

    customer.getAll(function(results){
		if(results != null){
			res.render('customer/view_product', {productlist: results});			
		}else{
			res.send('Error!.. try again...');
		}
    });
});

module.exports = router;