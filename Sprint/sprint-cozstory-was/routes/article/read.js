'use strict'

const { readAll, readOne } = require('../../model')
const FILL_ME_IN = 'FILL_ME_IN 대신 다른 값을 채워넣으세요'

module.exports = async function (app, opts) {
  app.get('/', async function (request, reply) {
    
    try { const result = await readAll (this .mongo )
      // console.log(`readAll result :`);
      if (result === []){
          return reply
            .code (404 )
            .header ('Content-Type', 'application/json', 'charset=utf-8')
            .send (`<h1><center>빈 페이지 입니다.</center></h1>`);
          }
           else {
            return reply
            .code (200 )
            .header ('Content-Type', 'application/json', 'charset=utf-8')
            .send (result )
           }
             
        } catch (error ) {
         return reply
         .code (500 )
         .header ('Content-Type', 'application/json', 'charset=utf-8')
         .send ('<h1><center>서버 에러</center></h1>')
        }
        })
        app .get ('/:id', async function (request , reply ) {
         // console.log("id", request.id)
         // console.log("url", request.url)
         // console.log("routerPath", request.routerPath)
         //console.log("id", request.params.id)
         const result = await readOne (this .mongo , request .params .id )
         
         reply
         .code (200 )
         .header ('Content-Type', 'application/json', 'charset=utf-8')
         .send (result )
        })
      }