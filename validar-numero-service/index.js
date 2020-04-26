const express = require('express')
const app = express()

app.use(express.json())

app.post('/validar-numero', (req, res, next) => {
  console.log('chegou aqui')
  const { valorA, valorB } = req.body

  if (!valorA || typeof(valorA) !== "number") {
    return res.status(400).json({ mensagem: "Valor A não informado ou não numérico!"})
  }

  if (!valorB || typeof(valorB) !== "number") {
    return res.status(400).json({ mensagem: "Valor não informado ou não numérico!"})
  }

  return next()

})

app.listen('3005')
