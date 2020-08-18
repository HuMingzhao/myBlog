const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')
const redisStore = require('koa-redis')

const { REDIS_CONF } = require('./conf/db')
const { isProd } = require('./utils/env') 

//路由
const errorViewRouter = require('./routes/view/error')
const index = require('./routes/index')

// error handler
let onerrorConf = {}
if (isProd) {
  onerrorConf = {
    redirect: '/error'
  }
}
 
onerror(app, onerrorConf)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/views'))

app.use(views(__dirname + '/views', {
  extension: 'html'
}))

//session 配置
app.keys = ['UIsdf_7878#$']
app.use(session({
  key: 'weibo.sid',  //cookie name 默认是koa.sid
  prefix: 'weibo:sess:', //redis key 的前缀，默认'koa:Sess'
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 24*60*60*1000  //ms
  },
  // ttl: 24*60*60*1000,
  store: redisStore({
    all: `${REDIS_CONF.host}:${REDIS_CONF.port}`
  })
}))

// logger
// app.use(async (ctx, next) => {
//   const start = new Date()
//   await next()
//   const ms = new Date() - start
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
// })

// routes
app.use(index.routes(), index.allowedMethods())
app.use(errorViewRouter.routes(), index.allowedMethods()) // 注册404在最下面


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
