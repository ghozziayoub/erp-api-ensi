//importation des bibliotheques
const express = require('express')
const bodyParser = require('body-parser')

//connection to mongodb 
const mongoose = require('./db/config')

//importation des controlleurs
const userController = require('./controllers/userController')
const taskController = require('./controllers/taskController')

const app = express()

app.use(bodyParser.json())

app.use('/user', userController)
app.use('/task', taskController)

app.get('/', (req, res) => {
    res.status(200).send("Welcome to the server !")
})

app.listen(3100, () => console.log("Server started"))