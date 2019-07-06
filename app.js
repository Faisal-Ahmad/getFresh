//declaration
var express= require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');

// ############ importing controllers ####################

var admin = require('./controllers/admin');
var customer = require('./controllers/customer');
var product = require('./controllers/product');
var supplier = require('./controllers/supplier');
var main = require('./controllers/main');


var app = express();

//configuration
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.urlencoded({'extended':false}));
app.use(expressSession({secret:'my top secret password', saveUninitialized: true, resave: false}));
app.use(cookieParser());

app.use(express.static(__dirname+'/public'));


app.use('/supplier',supplier);
app.use('/admin',admin);
app.use('/customer', customer);
app.use('/product', product);
app.use('/', main);


app.listen(5000, function(){
	console.log('Server started at 5000....');
})