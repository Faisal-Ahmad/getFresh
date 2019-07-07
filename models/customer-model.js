var db = require('./db');

module.exports = {

	getById: function(id, callback){
		var sql = "select * from customer where id= ?";
		db.getResult(sql,[id] ,function(result){
			callback(result);
		});
    },
	getAll: function(callback){
		var sql = "select * from product";
		db.getResult(sql, [], function(results){
			callback(results);
		});	
	}

}