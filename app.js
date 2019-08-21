const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const cors = require('koa-cors')
app.use(cors())

// const index = require('./routes/index')
// const users = require('./routes/users')



const koaBody = require('koa-body')({
    multipart: true
});

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
    extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

//routes

// 文章
const art_select = require('./routes/article/art_select')
app.use(art_select.routes(), art_select.allowedMethods())
//add
const art_add = require('./routes/article/art_add')
app.use(art_add.routes(), art_add.allowedMethods())
//update
const art_update = require('./routes/article/art_update')
app.use(art_update.routes(), art_update.allowedMethods())
//ÆÀÂÛ
const art_comment = require('./routes/article/art_comment')
app.use(art_comment.routes(), art_comment.allowedMethods())



//文件
const menu_image = require('./routes/webset/menu_image')
app.use(menu_image.routes(), menu_image.allowedMethods())

const menu_category = require('./routes/webset/menu_category')
app.use(menu_category.routes(), menu_category.allowedMethods())


const menu_image_del = require('./routes/webset/menu_image_del')
app.use(menu_image_del.routes(), menu_image_del.allowedMethods())



//小程序
const more_punch = require('./routes/minipro/more_punch')
app.use(more_punch.routes(), more_punch.allowedMethods())


const comment = require('./routes/minipro/comment')
app.use(comment.routes(), comment.allowedMethods())


// routes
// app.use(index.routes(), index.allowedMethods())
// app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

module.exports = app
