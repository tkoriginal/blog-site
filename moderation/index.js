const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())


app.post('/events', async (req, res) => {
    const { type, data } = req.body
    if (type === 'CommentCreate') {

        // Just for kicks we don't want any one to kit kat
        // May be cause we are secretly sponsored by Mondelez
        const status = data.content.includes('Kit Kat') ? 'rejected' : 'approved'

        await axios.post('http://localhost:4005/events', {
            type: 'CommentModerated',
            data: {
                ...data,
                status
            }
        })
        return res.send({})
    }
})

app.listen('4003', () => {
    console.log('Listening on PORT 4003')
})
