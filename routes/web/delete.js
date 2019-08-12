const router = require('koa-router')()
const db = require("../config/db");
router.prefix('/users')

router.post('/', async (ctx, next) => {

    let page =  ctx.request.body.id;
    var sql = 'DELETE FROM v9_news WHERE id = '+ deleteid;

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
