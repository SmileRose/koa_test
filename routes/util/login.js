const router = require('koa-router')()
const axios = require('axios');
router.prefix('/login')

var token = require('../util/token.js');

const BASEURL = 'https://api.weixin.qq.com';
const APPID = 'wx11bb9ed460c13af5';
const SECRET = "3fdd9fce211e7628dad712e4d23ed9ad";


router.post('/', async (ctx, next) => {
    var jscode =  ctx.request.body.jscode;
    var openid = '';

    var token = token.acesstoken();

    var url=  BASEURL + '/sns/jscode2session?appid='+ APPID +'&secret='+ SECRET +'&js_code='+ jscode +'&grant_type=authorization_code';

    await axios.post(url).then(function(res) {
        if(res.status==200){
            openid = res.data.openid;
        }
    });

    var _json = {
        openid: openid,
        token: token

    }


    ctx.body = {
        data: _json,
        flag: !openid ? false : true
    };
})
module.exports = router
