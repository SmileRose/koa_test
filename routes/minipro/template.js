const router = require('koa-router')()
const db = require("../config/db");
router.prefix('/users')

const MINIURL = 'https://api.weixin.qq.com';
const APPID = 'wx11bb9ed460c13af5';
const SECRET = 'jtthl#20100612';
const TEMPLATEID = 'j-3edb01UbYzkecJlaokoq9HeK_dUVSpQutNA7VWO4I';

//
var postURL = MINIURL + '/cgi-bin/wxopen/template/add?access_token=ACCESS_TOKEN';


//access_token
var getToken = MINIURL + '/cgi-bin/token?grant_type=client_credential&appid='+ APPID +'&secret='+ SECRET;


axios.get('/getToken').then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
});

router.post('/postcomments', async (ctx, next) => {

    var params = {
        newsid : ctx.request.body.newsid,
        pid : ctx.request.body.pid,
        from_username : ctx.request.body.from_username,
        from_avatar : ctx.request.body.from_avatar,
        reply_username : ctx.request.body.reply_username,
        reply_avatar : ctx.request.body.reply_avatar, // 回复了谁的头像，允许为空
        content : ctx.request.body.content
    }

    var sql = 'SELECT * FROM v9_news ORDER BY id desc limit ' + count + ','+ pagesize;

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
