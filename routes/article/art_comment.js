var express = require('express');
var router = express.Router();

var db = require("../config/db");
const Unity = require('../unity/unity');//Unity为一个工具类

const r = Unity.send;

/**
 * search
 */
router.get('/', function(req, res, next) {
	var id = req.body.id;
	var catid = req.body.catid;
	var title = req.body.title;
	var keywords = req.body.keywords;
	var description = req.body.description;
	var thumb = req.body.thumb;
	var content = req.body.content;

	var sql = "UPDATE v9_news SET catid =" + catid + ",title = " + title + ",keywords = " +keywords + ",description = " + description + ",content = " +content + " WHERE id = " + id;
    db.query(sql,function (error, rows) {
        if (error) {
            res.send(r('', 200, 1, 'error'));
        } else {
            res.send(r(rows));
        }
    })
});
module.exports = router;//不加这句会报错： Router.use() requires a middleware function but got a Object （没有向外暴露，导致app.use引用不到）
