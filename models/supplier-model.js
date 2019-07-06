var db = require('./db');

module.exports = {

	getById: function(id, callback){
		var sql = "select * from supplier where Id= ?";
		db.getResult(sql,id ,function(result){
			callback(result);
		});
    },
    create: function(data, callback){
        var sql = "INSERT INTO product(?,?,?,?,?,?)";
        console.log(sql);
		db.execute(sql,['',data.userId,data.date,data.pname,data.pquantity,data.pprice], function(status){
			callback(status);
        });
	},
	getAll: function(callback){
		var sql = "select * from product";
		db.getResult(sql, [], function(results){
			callback(results);
		});	
	},
	getByproductId: function(id, callback){
		var sql = "select * from product where Id= ?";
		db.getResult(sql,[id] ,function(result){
			callback(result);
		});
	},
	update: function(product, callback){
		var sql = "update product set Name=?, Quantity=?,Price=? where Id=?";
		db.execute(sql, [product.pname, product.pquantity,product.pprice, product.id], function(status){
			callback(status);
		});
	},
	delete: function(id, callback){
		var sql = "delete from product where id=?";
		db.execute(sql, [id], function(status){
			callback(status);
		});
	}
}