var express = require('express');
var router = express.Router();
var connection = require('../server/modules/mysql-connector')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next){
    console.log("into login");
    connection.query("select * from users")
})

module.exports = router;
