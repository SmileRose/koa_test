const router = require('koa-router')()
const db = require("../../config/db");

router.prefix('/menu_image')


/**
 * search
 */
router.post('/', async(ctx, next) => {


    var sql = "SELECT * FROM v9_attachment ORDER BY listorder DESC";
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
module.exports = router; //不加这句会报错： Router.use() requires a middleware function but got a Object （没有向外暴露，导致app.use引用不到）
