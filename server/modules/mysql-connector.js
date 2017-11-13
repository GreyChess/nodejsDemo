var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qianyichao',
    database: 'demo',
    port: 3306
})

connection.connect();
exports.query = function(sqlStatement, successCallback){
    var result = null;
    connection.query(sqlStatement, function(err, rows, fields){
        if(err){
            throw err;
        }
        result = rows;
        if(typeof successCallback == "function"){
            successCallback(result);
        }
    });
};
