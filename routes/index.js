// const router = require('koa-router')()
// const mysql = require('mysql');
// var db = require("../config/db");
// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })
// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })
// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })
// module.exports = router
const Koa = require('koa')
const app = new Koa()
async function api_group(){



    //=======文章模块=======//
    // 查询
    const art_select = require('./article/art_select')
    app.use(art_select.routes(), art_select.allowedMethods())
    //add
    const art_add = require('./article/art_add')
    app.use(art_add.routes(), art_add.allowedMethods())
    //update
    const art_update = require('./article/art_update')
    app.use(art_update.routes(), art_update.allowedMethods())
    //评论
    const art_comment = require('./article/art_comment')
    app.use(art_comment.routes(), art_comment.allowedMethods())
}
exports.api_group = api_group
    //=======文章模块=======//
