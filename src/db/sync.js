/**
 * @description sequelize 同步数据库
 */

const seq = require('./seq.js')

require('./model/index')

// 连接测试
seq.authenticate().then(() => {
    console.log('连接成功')
}).catch((err) => {
    console.log(err)
})

//执行同步
seq.sync({force: true}).then(() => {
    console.log('sync ok')
    process.exit()
})