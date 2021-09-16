const express = require('express')
const router = express.Router()
const connectToDB = require('./connect-db')

connectToDB.connectToDB

module.exports = router