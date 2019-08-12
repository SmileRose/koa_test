const router = require('koa-router')()
const db = require("../../config/db");
router.prefix('/art_add')

router.post('/', async (ctx, next) => {
  let catid = ctx.request.body.catid;
  let title = ctx.request.body.title;
  let keywords = ctx.request.body.keywords;
  let description = ctx.request.body.description;
  let inputtime = Math.round(new Date().getTime() / 1000);
  let updatetime = Math.round(new Date().getTime() / 1000);
  let id = ctx.request.body.id;
  var sql = '';
  if (id) {
    sql = 'UPDATE v9_news SET catid ="' + catid + '",title ="' + title + '",keywords ="' + keywords + '",updatetime =' + updatetime + ',description ="' + description + '" WHERE id = ' + id;
  } else {
    sql = 'INSERT INTO v9_news (catid, title,keywords,inputtime, updatetime,description,status) VALUES ("' + catid + '", "' + title + '","' + keywords + '","' + inputtime + '","' + updatetime + '","' + description + '", 99)';
  }
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
