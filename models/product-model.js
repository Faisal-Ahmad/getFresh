var db = require('./db');

module.exports = {

	getAll: function(callback){
		var sql = "select * from product";
		db.getResult(sql, [], function(results){
			callback(results);
		});	
	}
}