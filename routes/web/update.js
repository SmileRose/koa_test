const router = require('koa-router')()
const db = require("../config/db");


router.post('/add_article', async (ctx, next) => {

    let page =  ctx.request.body.catid;
    let pagesize =  ctx.request.body.title;
    let pagesize =  ctx.request.body.keywords;
    let pagesize =  ctx.request.body.description;
    let id = ctx.request.body.id;

    var inputtime = Math.round(new Date().getTime()/1000);
    var updatetime = Math.round(new Date().getTime()/1000);

    if(id){
        var sql = 'UPDATE v9_news SET catid ="' + catid + '",title ="' + title + '",keywords ="' + keywords + '",updatetime =' + updatetime + ',description ="' + description + '" WHERE id = '+ id;
    }



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
