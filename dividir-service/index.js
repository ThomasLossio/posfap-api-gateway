const express = require('express')
const app = express()

app.use(express.json())

app.post('/dividir', (req, res, next) => {
  const { valorA, valorB } = req.body

  return res.status(200).json({ resultado: valorA / valorB })
})

app.listen('3004')
