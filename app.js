'use strict'

const express = require('express')
const app = express()
const path = require('path')

app.set('port', 3000)
/**
 * setup middleware. also can specify which specific folder to log.
 * e.g. app.use('/css', (req, res, next))
 */
app.use('/css', (req, res, next) => {
  console.log(req.method, req.url)
  next()
})
/**
 * specify a static folder
 */
app.use(express.static(path.join(__dirname, 'public')))

require('./setup')(app)

let server = app.listen(app.get('port'), () => {
  let port = server.address().port
  console.log(`<<< Magic happens at port ${port}`)
})