var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config/config');

/* GET users listing. */

router.get('/', function (req, res) {


    const connection = mysql.createConnection(config);
    connection.connect();
    var sql = 'SELECT * FROM v9_news';
 
    connection.query(sql, function(err, rows, fields) {
        res.send({
            status: true,
            data: rows,
            message: "处理成功！"
        });
        connection.end();
    });
});
module.exports = router;
