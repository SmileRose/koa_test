const router = require('koa-router')()
const db = require("../config/db");
router.post('/users', async(ctx, next) => {
    let page = ctx.request.body.page;
    let pagesize = ctx.request.body.pagesize;
    let count = (page - 1) * pagesize;
    var sql = 'SELECT * FROM v9_news ORDER BY id desc limit ' + count + ',' + pagesize;
    var tmp = await db.query(sql).then(function(result) {
        return result;
    }, function(error) {
        return -1;
    });
    ctx.body = {
        data: tmp,
        flag: true
    };
})
//文件列表
router.post('/menu_image', async(ctx, next) => {
    var sql = "SELECT * FROM v9_attachment ORDER BY aid DESC";
    var tmp = await db.query(sql).then(function(result) {
        return result;
    }, function(error) {
        return -1;
    });
    ctx.body = {
        data: tmp,
        flag: true
    };
});

//类型
router.post('/category', async(ctx, next) => {

    var sql = 'SELECT * FROM v9_category ORDER BY catid ASC';

    var tmp = await db.query(sql).then(function(result) {
        return result;
    }, function(error) {
        return -1;
    });
    ctx.body = {
        data: tmp,
        flag: true,
        message: "success"
    };
})


module.exports = router
