const express = require('express');
const router = express.Router();
const db = require("../config/db");
const Unity = require('../unity/unity'); //Unity为一个工具类
const r = Unity.send;

router.post('/', function(req, res, next) {


    var catid = req.body.catid;
    var title = req.body.title;
    var keywords = req.body.keywords;
    var description = req.body.description;
    var inputtime = Math.round(new Date().getTime()/1000);
    var updatetime = Math.round(new Date().getTime()/1000);
    var id = req.body.id;
    var sql = '';
    
     if(id){
      sql = 'UPDATE v9_news SET catid ="' + catid + '",title ="' + title + '",keywords ="' + keywords + '",updatetime =' + updatetime + ',description ="' + description + '" WHERE id = '+ id;
     
     }else{
       sql = 'INSERT INTO v9_news (catid, title,keywords,inputtime, updatetime,description,status) VALUES ("' + catid + '", "' + title + '","' + keywords + '","' + inputtime + '","' + updatetime + '","' + description + '", 99)';
     }


    
    console.log(sql);

    db.query(sql, function(error, rows) {
        if (error) {
            res.send(r('', 200, 1, 'error'));
        } else {

            res.send(r(rows));
        }
    })
});
module.exports = router;
