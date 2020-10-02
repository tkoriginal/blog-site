const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())

const commentsToModerate = {}

app.post('/events', (req, res) => {
    const { type, data } = req.body
    if (type === 'CommentCreate') {
        commentsToModerate[data.id] = data
        return res.send(201)
    }
})

app.post('/moderate', (req,res) => {
})

app.listen('4003', () => {
    console.log('Listening on PORT 4003')
})
