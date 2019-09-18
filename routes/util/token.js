const axios = require('axios');
const BASEURL = 'https://api.weixin.qq.com';
const APPID = 'wx11bb9ed460c13af5';
const SECRET = "3fdd9fce211e7628dad712e4d23ed9ad";
const TEMPLATEID = 'j-3edb01UbYzkecJlaokoq9HeK_dUVSpQutNA7VWO4I';
//access_token get
var getToken = BASEURL + '/cgi-bin/token?grant_type=client_credential&appid=' + APPID + '&secret=' + SECRET;

const acesstoken = n => {
 return new Promise(function (resolve, reject) {

     axios.get(getToken).then(function(res) {
        if(res.status==200){
            var _data = res.data.access_token;
            const access_token = _data;
            return _data;
        }

    })
     .catch(function(error) {
        console.log(error);
    });
 })
}
module.exports.acesstoken = acesstoken;
// module.exports = router
