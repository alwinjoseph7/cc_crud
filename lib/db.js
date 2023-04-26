var mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'test-db.cemgmqk1r12v.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'infernape99',
    database: 'test_db'
  });
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Database Connected Successfully..!!');
	}
});

module.exports = connection;