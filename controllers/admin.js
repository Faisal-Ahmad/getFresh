var express = require('express');
var router = express.Router();

// ########### admin login

router.get('/login', function(req, res){
    return res.send("login");
});

// ########### admin signup

router.get('/signup', function(req, res){
    return res.send("signup");
});

// ########### admin dashboard

router.get('/', function(req, res){
    return res.send("dashboard")
});

module.exports = router;