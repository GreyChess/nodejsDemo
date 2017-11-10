var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qianyichao',
    database: 'demo',
    port: 3306
})

connection.connect();
exports.query = function(sqlStatement){
    connection.query(sqlStatement, function(err, rows, fields){
        if(err){
            throw err;
        }
        if(rows.length > 0){
            rows.forEach(function(rowItem){
                console.log(rowItem);
            })
        }
    });
};
