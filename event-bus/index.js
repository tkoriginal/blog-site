const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const servicePorts = [4000, 4001, 4002, 4003]

const app = express()
app.use(bodyParser.json())

app.post('/events', (req, res) => {
  const event = req.body

  servicePorts.map(servicePort => {
    axios.post(`http://localhost:${servicePort}/events`, event)
  })

  res.send({ status: 'OK' })
})

app.listen('4005', () => {
  console.log('Listening on port 4005')
})
