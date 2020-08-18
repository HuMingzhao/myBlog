const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../conf/db')
const { isProd, isTest } = require('../utils/env') 

const { host, user, password, database } = MYSQL_CONF

const conf = {
    host,
    dialect: 'mysql'
}

if (isTest) {
    conf.logging = () => {}
}

if (isProd) {
    conf.pool = {  //线上用
        max: 5,  //连接池中最大的连接数量
        min: 0,  //最小
        idle: 10000  //如果一个连接池10s内未被使用。 则释放
    }
}


const seq = new Sequelize(database, user, password, conf);

module.exports = seq