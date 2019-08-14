const router = require('koa-router')()
const db = require("../../config/db");

router.prefix('/more_punch')

router.post('/', async (ctx, next) => {

    let page =  ctx.request.body.page;
    let pagesize =  ctx.request.body.pagesize;

    let count = ( page - 1 )* pagesize;
	
    var sql = 'SELECT * FROM v9_pinch ORDER BY id desc limit ' + count + ','+ pagesize;
    var tmp = await db.query(sql).then(function(result) {
        return result;
    }, function(error){
        return -1;
    });
    ctx.body = {
        data: tmp,
        flag: tmp == -1 ? false : true
    };
})

module.exports = router
