'use strict'

const { deleteOne } = require('../../model')
const FILL_ME_IN = 'FILL_ME_IN 대신 다른 값을 채워넣으세요'

module.exports = async function (app, opts) {
  app.delete('/:id', async function (request, reply) {
  

      const result = await deleteOne (this .mongo ,request.params.id )
       if (!result.value){
      return reply
        .code (204 )
         .header ('Content-Type', 'application/json', 'charset=utf-8')
         .send ({value : null, ok : result.ok })
       } else {
        return reply
       .code (200 )
       .header ('Content-Type', 'application/json', 'charset=utf-8')
       .send ({value : null, ok : result.ok })
       }

       
      })
    }