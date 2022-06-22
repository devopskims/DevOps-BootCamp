'use strict'

const { createOne } = require('../../model')
const FILL_ME_IN = 'FILL_ME_IN 대신 다른 값을 채워넣으세요'

module.exports = async function (app, opts) {
  app.post('/', async function (request, reply) {
    const result = await createOne(this.mongo, request.body)

    reply
      .code(200)
      .header('Content-Type', 'application/json', 'charset=utf-8')
      .send({id : result.insertedId})
  })
}
