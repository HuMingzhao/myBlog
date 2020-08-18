/**
 * @description 连接redis的方法 get set
 * @author sugar
 */

 const redis = require('redis')
 const { REDIS_CONF } = require('../conf/db')

 //创建客户端
 const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)
 redisClient.on('error', err => {
     console.error('redis error', err)
 })

 function set(key, val, timeout = 60*60) {
     if (typeof val === 'object') {
         val = JSON.stringify(val)
     }
     redisClient.set(key, val)
     redisClient.expire(key, timeout)
 }

 function get(key) {
   return new Promise((resolve, reject) => {
       redisClient.get(key, (err, val) => {
         if (err) {
             reject(err)
             return 
         }
         if (val == null) {
             resolve(null)
             return
         }

         try {
             resolve( JSON.parse(val))
         } catch (error) {
             resolve(val)
         }
       })

   })
 }

 module.exports = {
     get,
     set
 }