const router = require('koa-router')()
const db = require("../../config/db");
router.prefix('/menu_image_del')
/**
 * search
 */
router.post('/', async(ctx, next) => {
    let aid =  ctx.request.body.aid;
    var sql = 'DELETE FROM v9_attachment WHERE aid in (' + aid +')';
    var tmp = await db.query(sql).then(function(result) {
        return result;
    }, function(error) {
        return -1;
    });
    ctx.body = {
        data: tmp,
        flag: tmp == -1 ? false: true
    };
});
module.exports = router;
