var db = require('./db');

module.exports = {

	getById: function(id, callback){
		var sql = "select * from user where id="+id;
		db.getResult(sql, function(result){
			callback(result);
		});
	},
	getAll: function(callback){
		var sql = "select * from user";
		db.getResult(sql, function(results){
			callback(results);
		});	
	},
	validate: function(user, callback){

		var sql = "select * from user where username='"+user.username+"' and password='"+user.password+"'";
		db.getResult(sql, function(results){

			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	create: function(user, callback){
		var sql = "insert into user ('','"+user.username+"','"+user.password+"')";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	update: function(user, callback){
		var sql = "update user set username='"+user.username+"', password='"+user.password+"' where id="+user.id;
		db.execute(sql, function(status){
			callback(status);
		});
	},
	delete: function(id, callback){
		var sql = "delete from user where id="+id;
		db.execute(sql, function(status){
			callback(status);
		});
	}
}