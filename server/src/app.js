
console.log('hello')
const express = require('express')
const bodyParser = require('body-parser') // alowes to process json data
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined')) // for logs
app.use(bodyParser.json()) // for json parsing
app.use(cors()) // for web security allows any app to access, use it carefully

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world'
  })
})

app.listen(process.env.PORT || 8081)
