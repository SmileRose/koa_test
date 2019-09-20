const router = require('koa-router')()
const axios = require('axios');
router.prefix('/template')


const BASEURL = 'https://api.weixin.qq.com';
const APPID = 'wx11bb9ed460c13af5';
const SECRET = "3fdd9fce211e7628dad712e4d23ed9ad";

router.post('/', async (ctx, next) => {
    var postdata =  ctx.request.body;


    var _jsonData = {
      template_id: 'j-3edb01UbYzkecJlaokoq9HeK_dUVSpQutNA7VWO4I',
      page: "pages/detail/detail",
  }
  var obj = Object.assign(_jsonData, postdata);


  var tokes = obj.access_token;



   console.log(obj)

  var tplurl =  'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token='+ tokes;



  var tmp = await axios.post(tplurl, obj).then(function(res) {
        if(res.data.flag){
          console.log('success')


        }
    });

    ctx.body = {
        data: tmp,
        flag: tmp == -1 ? false : true
    };
})
module.exports = router
