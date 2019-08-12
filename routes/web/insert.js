const router = require('koa-router')()
const db = require("../config/db");


router.post('/', async (ctx, next) => {

    let page =  ctx.request.body.catid;
    let pagesize =  ctx.request.body.title;
    let pagesize =  ctx.request.body.keywords;
    let pagesize =  ctx.request.body.description;
    let id = ctx.request.body.id;

    var inputtime = Math.round(new Date().getTime()/1000);
    var updatetime = Math.round(new Date().getTime()/1000);

    var sql = 'INSERT INTO v9_news (catid, title,keywords,inputtime, updatetime,description,status) VALUES ("' + catid + '", "' + title + '","' + keywords + '","' + inputtime + '","' + updatetime + '","' + description + '", 99)';



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
