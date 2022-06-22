'use strict'

const { updateOne } = require('../../model')
const FILL_ME_IN = 'FILL_ME_IN 대신 다른 값을 채워넣으세요'

module.exports = async function (app, opts) {
  app.put('/:id', async function (request, reply) {
    const result = await updateOne(this.mongo, request.params.id, request.body)
      return reply
         .code (200 )
         .header ('Content-Type', 'application/json', 'charset=utf-8')
         .send ({"value" :result })

  //consol .log (result )
  // if (request .params .id === "621efb663a0bcc40f53c3a9d"){
  //   return  reply
  //      .code (200 )
  //      .header ('Content-Type', 'application/json', 'charset=utf-8')
  //      .send ({value :result.value , ok :result.ok })
  //   } else {
  //   return reply
  //   .code (404 )
  //      .header ('Content-Type', 'application/json', 'charset=utf-8')
  //      .send ({error : "" })

  // }
  
  
  
  
      })
    }