var db = require('./db');

module.exports = {

	getById: function(id, callback){
		var sql = "select * from employee where id="+id;
		db.getResult(sql, function(result){
			callback(result);
		});
	},
	getAll: function(callback){
		var sql = "select * from employee";
		db.getResult(sql, function(results){
			callback(results);
		});	
	},
	validate: function(employee, callback){

		var sql = "select * from employee where ename='"+employee.ename+"' and password='"+employee.password+"'";
		db.getResult(sql, function(results){

			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	create: function(employee, callback){
		var sql = "insert into employee ('','"+employee.ename+"','"+employee.password+"')";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	update: function(employee, callback){
		var sql = "update user set ename='"+employee.ename+"', password='"+employee.password+"' where id="+employee.id;
		db.execute(sql, function(status){
			callback(status);
		});
	},
	delete: function(id, callback){
		var sql = "delete from employee where id="+id;
		db.execute(sql, function(status){
			callback(status);
		});
	}
}