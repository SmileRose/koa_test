const router = require('koa-router')()
const db = require("../../config/db");

router.prefix('/article_comment')
/**
 * search
 */
 router.post('/', async (ctx, next) => {
	var id = ctx.request.body.id;
	var catid = ctx.request.body.catid;
	var title = ctx.request.body.title;
	var keywords = ctx.request.body.keywords;
	var description = ctx.request.body.description;
	var thumb = ctx.request.body.thumb;
	var content = ctx.request.body.content;



	var sql = "UPDATE v9_news SET catid =" + catid + ",title = " + title + ",keywords = " +keywords + ",description = " + description + ",content = " +content + " WHERE id = " + id;


    var tmp = await db.query(sql).then(function(result) {
        return result;
    }, function(error){
        return -1;
    });
    ctx.body = {
        data: tmp,
        flag: true
    };
});
module.exports = router;//不加这句会报错： Router.use() requires a middleware function but got a Object （没有向外暴露，导致app.use引用不到）
