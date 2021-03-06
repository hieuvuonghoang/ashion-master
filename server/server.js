const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = 3000

const api = require('./routers/api')

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

app.use('/api', api)

app.listen(PORT, function() {
    console.log('Server running on localhost:' + PORT);
})

