var db = require('./db');

module.exports = {

	getById: function(id, callback){
		var sql = "select * from supplier where Id="+id;
		db.getResult(sql, function(result){
			callback(result);
		});
    },
    create: function(data, callback){
        var sql = "INSERT INTO `product`(`Id`, `Name`, `Quantity`, `Price`) VALUES ('','"+data.pname+"','"+data.pquantity+"','"+data.pprice+"')";
        console.log(sql);
		db.execute(sql, function(status){
			callback(status);
        });
    }
}