/**
 * @description jest server
 * @author sugar
 */

 const request = require('supertest')
 const server = require('../src/app').callback()

 module.exports = request(server)