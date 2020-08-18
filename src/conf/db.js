/**
 * @description 存储配置
 * @author sugar
 */

 const { isProd } = require('../utils/env')
 
 let REDIS_CONF = {
     port: 6379,
     host: '127.0.0.1'
 }

 let MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'math8418!!',
    port: '3306',
    database: 'myblog'
 }

 if (isProd) {
    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }

    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'math8418!!',
        port: '3306',
        database: 'myblog'
    }
 }

 module.exports = {
    REDIS_CONF,
    MYSQL_CONF
 }