const router = require('koa-router')()
const db = require("../../config/db");

router.prefix('/menu_image')


/**
 * search
 */
router.post('/', async (ctx, next) => {

    let page = ctx.request.body.page;
    let pagesize = ctx.request.body.pagesize;
    let count = (page - 1) * pagesize;

    let aid = ctx.request.body.aid;
    let prevone = ctx.request.body.prevone;
    let nextone = ctx.request.body.nextone;

    if (aid && prevone) {
        var sql = 'SELECT * FROM v9_attachment AS n WHERE n.aid < '+aid +' ORDER BY n.aid DESC LIMIT 0,1';

    } else if (aid && nextone) {
        var sql = 'SELECT * FROM v9_attachment AS n WHERE n.aid > '+aid +' ORDER BY n.aid LIMIT 0,1';

    } else {
        var sql = 'SELECT * FROM v9_attachment ORDER BY aid DESC LIMIT ' + count + ',' + pagesize;
    }



    console.log(sql)

    var tmp = await db.query(sql).then(function(result) {
        return result;
    }, function(error) {
        return -1;

    });
    ctx.body = {
        data: tmp,
        flag: tmp == -1 ? false : true
    };
});
module.exports = router; //不加这句会报错： Router.use() requires a middleware function but got a Object （没有向外暴露，导致app.use引用不到）
