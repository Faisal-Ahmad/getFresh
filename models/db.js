

var mysql = require('mysql');




var setup = {
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'getfresh' 
};

var getConnection = function(callback){
	var connection = mysql.createConnection(setup);
	connection.connect(function(err) {
	  	if (err){
	  		console.log('Error in connection...');
	  	}
	});
	callback(connection);
}

module.exports= {
	getResult: function(sql, callback){

		getConnection(function(connection){
			connection.query(sql, function (error, results) {

				if(error){
					callback([]);
				}else{
					callback(results);					
				}
			});

			connection.end(function(err) {
				console.log('connection ends');
			});
		});
	},
	execute: function(sql, callback){

		getConnection(function(connection){
			connection.query(sql, function (error, results) {

				if(error){
					callback(false);
				}else{
					callback(true);					
				}
			});

			connection.end(function(err) {
				console.log('connection ends');
			});
		});
	}
}