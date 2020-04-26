const { Router } = require("express")
const proxy = require('express-http-proxy')

const routes = new Router()

const somarService = proxy('http://localhost:3001')
const subtrairService = proxy('http://localhost:3002')
const multiplicarService = proxy('http://localhost:3003')
const dividirService = proxy('http://localhost:3004')
const githubProxy = proxy('https://api.github.com')


routes.post('/somar', (req, res, next) => {
  somarService(req, res, next)
})

routes.post('/subtrair', (req, res, next) => {
  subtrairService(req, res, next)
})

routes.post('/multiplicar', (req, res, next) => {
  multiplicarService(req, res, next)
})

routes.post('/dividir', (req, res, next) => {
  dividirService(req, res, next)
})



routes.get('/users/:name', (req, res, next) => {
  githubProxy(req, res, next)
})


module.exports = routes
