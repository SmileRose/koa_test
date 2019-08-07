const router = require('koa-router')()

const db = require("../config/db");



router.prefix('/users')



router.post('/', async (ctx, next) => {
  let data = {
    page: ctx.request.body.page,
    pagesize: ctx.request.body.pagesize,
  };



  sql = 'SELECT * FROM v9_news ORDER BY id desc limit ' + count + ','+ pagesize;


  var tmp = await db.query(sql).then(function(result) {
    console.log(result);
    return result;
  }, function(error){
    return -1;
  });

   ctx.body = tmp;
})



module.exports = router
