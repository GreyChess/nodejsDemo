var express = require('express');
var router = express.Router();
var connection = require('../server/modules/mysql-connector')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next){
    var self = this;
    var data = req.body;
    var para = data.username;
    var password = data.password;
    connection.query("select password from users where username="+"'"+para+"'",
     function(result){
        if(result.length == 0){
            res.send(false);
        }else{
            var access = password == result[0].password;
            res.send(access);
        }
    });
})

module.exports = router;
