const express = require('express')
const app = express()

app.use(express.json())

app.post('/validar-numero', (req, res, next) => {
  const { valorA, valorB } = req.body

  if (!valorA || typeof(valorA) !== "number") {
    return res.status(200).json({ mensagem: 'Deu errado' })
  }

  if (!valorB || typeof(valorB) !== "number") {
    return res.status(200).json({ mensagem: 'Deu errado' })
  }

  return res.status(200).json({ mensagem: 'Deu certo' })

})

app.listen('3005')
