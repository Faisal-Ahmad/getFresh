var db = require('./db');

module.exports = {

	getById: function(id, callback){
		var sql = "select * from supplier where id= ?";
		db.getResult(sql,id ,function(result){
			callback(result);
		});
    },
    create: function(data, callback){
        var sql = "INSERT INTO `product`(`id`, `userId`, `name`, `description`, `price`, `approved`) VALUES (?,?,?,?,?,?)";
		db.execute(sql,['',data.userId,data.pname,data.pdescription,data.pprice,'false'], function(status){
			callback(status);
        });
	},
	getAll: function(id,callback){
		var sql = "select * from product where Employee_Id = ?";
		db.getResult(sql, [id], function(results){
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