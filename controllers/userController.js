const express = require('express')
const bcrypt = require('bcryptjs')

const User = require('./../models/user')

const app = express()

app.get('/', (req, res) => {
    res.status(200).send("Welcome to user controller")
})

app.get('/one/:id', (req, res) => {

    let myid = req.params.id
    console.log(myid);

    res.status(200).send({ msg: "User One API Works !" })
})

app.post('/add', (req, res) => {

    //Recupération des données eli jeyin mel front
    let data = req.body
    data.password = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10))

    //creation d'un objet <= data
    let user = new User({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
        password: data.password,
        gender: data.gender,
        birthday: data.birthday,
        level: data.level,
        since: data.since,
        department: data.department
    })

    //enregistrement mta3 l'objet fel base de donnée
    //envoi vers le front Response fiha résultat mta3 l'enregistrement
    
    user.save()
        .then(() => {
            res.status(201).send({ msg: "Member added !" })
        })
        .catch((error) => {
            res.status(400).send(error)
        })

    
})

module.exports = app 