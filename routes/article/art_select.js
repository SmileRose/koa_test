const router = require('koa-router')()
const db = require("../../config/db");

router.prefix('/art_select')


router.post('/', async (ctx, next) => {
    console.log(222)

    let page =  ctx.request.body.page;
    let pagesize =  ctx.request.body.pagesize;
    let count = ( page - 1 )* pagesize;

    var sql = 'SELECT * FROM v9_news ORDER BY id desc limit ' + count + ','+ pagesize;
    var tmp = await db.query(sql).then(function(result) {
        return result;
    }, function(error){
        return -1;
    });
    ctx.body = {
        data: tmp,
        flag: true
    };
})

module.exports = router