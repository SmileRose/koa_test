const router = require('koa-router')()
const db = require("../../config/db");
router.prefix('/art_select')
router.post('/', async(ctx, next) => {
    let id = ctx.request.body.id;
    let page = ctx.request.body.page;
    let pagesize = ctx.request.body.pagesize;
    let count = (page - 1) * pagesize;
    if (id) {
        var sql = 'SELECT v9_news.id, v9_news.catid, v9_news.description, v9_news.keywords, v9_news.thumb, v9_news.title, v9_news_data.content FROM v9_news INNER JOIN v9_news_data ON v9_news.id = v9_news_data.id WHERE v9_news.id = ' + id
    } else {
        var sql = 'SELECT * FROM v9_news ORDER BY id desc limit ' + count + ',' + pagesize;
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
})
module.exports = router
