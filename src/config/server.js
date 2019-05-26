const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

// options: OptionsUrlencoded;
const options = {
  extended: true
}

server.use(bodyParser.urlencoded(options))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, () => {
  console.log('Back running on port ', port)
})

module.exports = server