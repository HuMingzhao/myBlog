const server = require('./server')
const { expect } = require('./server')

test('接口返回格式正确', async () => {
    const res = server.get('./json')

    expect(res.body).toEqual({
        title: 'koa2 json'
    })

    // const res = server.post('/login').send({
    //     userName: '',
    //     password: ''
    // })
})