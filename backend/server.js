const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

const messages = [
    {
        user: 1,
        message: 'hi',
    },{
        user: 2,
        message: 'hi back',
    },
    {
        user: 1,
        message: 'yoooooo',
    },
]

app.use(cors())
app.get('/messages', (req, res) => {
  //res.send('hello world')
  res.send({ data: messages })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})