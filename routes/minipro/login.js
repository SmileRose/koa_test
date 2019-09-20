const router = require('koa-router')()
const axios = require('axios');
// var tokenn = require('../util/token.js');
router.prefix('/login')


const BASEURL = 'https://api.weixin.qq.com';
const APPID = 'wx11bb9ed460c13af5';
const SECRET = "3fdd9fce211e7628dad712e4d23ed9ad";


router.post('/', async (ctx, next) => {
    var jscode = ctx.request.body.jscode;
    var openid = '';
    var tokes = '';

    var getToken = BASEURL + '/cgi-bin/token?grant_type=client_credential&appid=' + APPID + '&secret=' + SECRET;

    await axios.get(getToken).then(function(res) {
        if (res.status == 200) {
            var _data = res.data.access_token;
            tokes = _data;
        }

    })


    var openUrl = BASEURL + '/sns/jscode2session?appid=' + APPID + '&secret=' + SECRET + '&js_code=' + jscode + '&grant_type=authorization_code';

    await axios.post(openUrl).then(function(res) {
        if (res.status == 200) {
            openid = res.data.openid;

        }
    });

    var _json = {
        openid: openid,
        tokes: tokes
    }
    ctx.body = {
        data: _json,
        flag: !openid || !tokes ? false : true
    };
})
module.exports = router
