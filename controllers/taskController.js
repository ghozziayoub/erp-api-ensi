const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).send("Welcome to task controller")
})

app.post('/add', (req, res) => {
    res.status(200).send("/task/add API Works !")
})

module.exports = app