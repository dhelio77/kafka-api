'use strict'

const path = require('path')

class Service {
  constructor(app) {
    this.app = app
  }
  setup() {
    let self = this
    // self.app.get('/', (req, res) => {
    //   console.log(`<<< Get the homepage!!!`)
    //   res
    //     .status(200)
    //     .sendFile(path.join(__dirname, 'public', 'index.html'))
    // })

    self.app.get('/json', (req, res) => {
      console.log(`<<< Get the json!!!`)
      res
        .status(204)
        .json({ 'json': true })
    })
    self.app.get('/file', (req, res) => {
      console.log(`<<< Get the file!!!`)
      res
        .status(200)
        .sendFile(path.join(__dirname, 'setup.js'))
    })
  }
}

module.exports = (app) => {
  const s = new Service(app)
  s.setup()
  return s
}