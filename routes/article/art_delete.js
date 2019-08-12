const router = require('koa-router')()
const db = require("../../config/db");

router.prefix('/article_delete')

/**
 * search
 */
 router.post('/', async (ctx, next) => {
	var deleteid = ctx.request.body.id;
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
});
module.exports = router;//不加这句会报错： Router.use() requires a middleware function but got a Object （没有向外暴露，导致app.use引用不到）
