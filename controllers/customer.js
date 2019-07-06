var express = require('express');
var router = express.Router();

// ##### add item to cart

router.get('/cart/:id', function(req, res){
    return res.send("add item to cart");
});

// ##### purchase items
router.get('/make-purchase', function(req, res){
    return res.send("make purchase");
});

module.exports = router;