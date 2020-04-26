const express = require('express')
const app = express()

app.use(express.json())

app.post('/service-parouimpar', (req, res, next) => {
  const { valor } = req.body

  if (!valor || typeof(valor) !== "number") {
    return res.status(400).json({ mensagem: "Valor não informado ou não numérico!"})
  }

  if (valor % 2 === 0) {
    return res.status(200).json({ mensagem: "Valor é par!" })
  }

  return res.status(200).json({ mensagem: "Valor é ímpar!" })
})

app.listen('3001')
