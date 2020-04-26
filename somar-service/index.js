const express = require('express')
const proxy = require('express-http-proxy')
const app = express()



app.use(express.json())

app.post('/somar', (req, res, next) => {
  console.log('aqui')
  proxy('http://localhost:3005/validar-numero')
  console.log('aqui')

}, (req, res, next) => {
  const { valorA, valorB } = req.body

  return res.status(200).json({ resultado: valorA + valorB })
})

app.listen('3001')
