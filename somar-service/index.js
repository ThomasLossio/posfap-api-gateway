const express = require('express')
const app = express()
const axios = require('axios')



app.use(express.json())

app.post('/somar', (req, res, next) => {
  const { valorA, valorB } = req.body

  axios
  .post('http://localhost:3005/validar-numero', {
    valorA,
    valorB
  })
  .then(response => {
    const { mensagem } = response.data

    if (mensagem === 'Deu certo') return res.status(200).json({ resultado: valorA + valorB })

    return res.status(400).json({ mensagem: "Valor não informado ou não numérico!"})
  })
  .catch(error => {
    return res.json({ mensagem: "Recurso temporariamente indisponível" })
  })
})

app.listen('3001')
