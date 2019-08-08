const router = require('koa-router')()
const db = require("../config/db");
router.prefix('/users')

router
  .param('users', (page, pagesize,ctx, next) => {
  console.log(page, pagesize)
  
    ctx.user = users[id];
    if (!ctx.user) return ctx.status = 404;
    return next();
  })
  

router.all('users/:page/:pagesize', async (ctx, next) => {
console.log(ctx)

    let page =  ctx.request.body.page;   
    
    let pagesize =  ctx.request.body.pagesize£»    
    let count = ( page-1 )* pagesize;


  var sql = 'SELECT * FROM v9_news ORDER BY id desc limit ' + count + ','+ pagesize;
  var tmp = await db.query(sql).then(function(result) {
    console.log(result);
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
