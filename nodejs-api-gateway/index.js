const express = require('express')
const proxy = require('express-http-proxy')
const app = express()

app.use('/proxy', proxy('https://api.github.com/users/thomasneo'))

app.listen('3333')