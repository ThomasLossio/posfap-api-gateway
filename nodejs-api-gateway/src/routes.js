const { Router } = require("express")
const proxy = require('express-http-proxy')

const routes = new Router()

const microservico = proxy('http://localhost:3001')
const githubProxy = proxy('https://api.github.com')


routes.post('/service-parouimpar', (req, res, next) => {

  microservico(req, res, next)
})


routes.get('/users/:name', (req, res, next) => {
  githubProxy(req, res, next)
})


module.exports = routes
