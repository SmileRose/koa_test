const router = require('koa-router')()
const db = require("../../config/db");

router.prefix('/menu_category')

/**
 * search
 */
router.post('/', async(ctx, next) => {


    var sql = "SELECT * FROM v9_category ORDER BY listorder ASC";
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
module.exports = router;
