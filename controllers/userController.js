const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).send("Welcome to user controller")
})

app.get('/one/:id', (req, res) => {

    let myid = req.params.id
    console.log(myid);
    
    res.status(200).send({ msg: "User One API Works !" })
})

app.post('/register', (req, res) => {

    let data = req.body
    console.log(data);

    res.status(201).send({ msg: "Register API Works !" })
})

module.exports = app