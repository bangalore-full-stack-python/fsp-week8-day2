var sqlite3 = require('sqlite3').verbose();  
var db = new sqlite3.Database('info.db');

db.serialize(function() {  
	db.run("CREATE TABLE user (id INT, username TEXT, password TEXT)");

	var stmt = db.prepare("INSERT INTO user(id, username, password) VALUES(1, "akanksha", "india")");

	stmt.finalize();
  
	db.each("SELECT username, password FROM user", 
	function(err, row) {  
		console.log("User Name: " + row.username, + "Password: " + row.password);  
	});  
});  
  
db.close();