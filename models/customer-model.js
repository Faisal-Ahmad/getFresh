var db = require('./db');

module.exports = {

	getById: function(id, callback){
		var sql = "select * from customer where id=?";
		db.getResult(sql, [id], function(result){
			callback(result);
		});
	},
	getByUn: function(user, callback){
		var sql = "select * from `customer` where username=?";
		db.getResult(sql, [user.username], function(result){
			callback(result);
		});

	},
	getAll: function(callback){
		var sql = "select * from customer";
		db.getResult(sql, [], function(results){
			callback(results);
		});	
	},
	validate: function(user, callback){
		var sql = "select * from customer where username=? and password=?";
		db.getResult(sql,[user.username, user.password], function(results){

			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	customerCreate: function(user, callback){
		var sql = "insert into customer values (?,?,?,?,?,?,?)";
		db.execute(sql,['',user.username, user.password, user.name, user.contactnumber, user.email, user.address], function(status){
			//console.log(status);
			callback(status);
		});
	},
	
	updateCustomer: function(user, callback){
		var sql = "update customer set Name=?, contactnumber=?,email=?, address=? where username=? ";
		db.execute(sql, [user.name, user.contactnumber, user.email, user.address, user.username], function(status){
			callback(status);
		});
	},
	changePassword: function(user, callback){
		var sql = "update customer set password=? where username=? ";
		db.execute(sql, [user.password, user.username], function(status){
			callback(status);
		});
	},
	
	update: function(user, callback){
		var sql = "update customer set username=?, password=? where id=?";
		db.execute(sql, [user.username, user.password, user.id], function(status){
			callback(status);
		});
	},
	delete: function(id, callback){
		var sql = "delete from customer where id=?";
		db.execute(sql, [id], function(status){
			callback(status);
		});
	}
}