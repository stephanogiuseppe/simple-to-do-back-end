const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express()

// options: OptionsUrlencoded;
const options = {
  extended: true
}

server.use(bodyParser.urlencoded(options))
server.use(bodyParser.json())

server.listen(port, () => {
  console.log('Back running on port ', port)
})
