const express = require('express')
const bcrypt = require('bcryptjs')

const User = require('./../models/user')

const app = express()

app.get('/', (req, res) => {
    res.status(200).send("Welcome to user controller")
})

//POST APIs

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


//GET APIs

app.get('/allUsers', (req, res) => {

    //find() trajja3 un tableau des objets 
    User.find()
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((error) => {
            res.status(400).send(error)
        })
})

app.get('/all', (req, res) => {

    //find() trajja3 un tableau des objets 

    /* let WHERE_CL = {
         $or: [{ role: "member" },{ role: "admin" }]
     }*/

    User.find({ role: "member" })
        //.or([{ role: "member" }, { role: "admin" }])
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((error) => {
            res.status(400).send(error)
        })
})

app.get('/one/:id', (req, res) => {

    let myid = req.params.id
    //findOne traja3 JSON Object

    User.findOne({ _id: myid })
        .then((userFromDB) => {
            if (!userFromDB) {
                res.status(404).send({ message: "User Not Found" })
            } else {
                res.status(200).send(userFromDB)
            }
        })
        .catch((error) => {
            res.status(400).send(error)
        })
})

//DELETE APIs
app.delete('/delete/:id', (req, res) => {

    let myid = req.params.id
    //findOne traja3 JSON Object

    User.findOneAndDelete({ _id: myid })
        .then((userFromDB) => {
            if (!userFromDB) {
                res.status(404).send({ message: "User Not Found" })
            } else {
                res.status(200).send({ msg: "User Deleted !" })
            }
        })
        .catch((error) => {
            res.status(400).send(error)
        })
})

//PATCH APIs
app.patch('/update_account_state', (req, res) => {

    let myid = req.body.id
    //findOne traja3 JSON Object

    User.findOne({ _id: myid })
        .then((userFromDB) => {
            if (!userFromDB) {
                res.status(404).send({ message: "User Not Found" })
            } else {

                userFromDB.accountState = !userFromDB.accountState
                userFromDB.save()

                res.status(200).send({ msg: "User Account State Updated !" })
            }
        })
        .catch((error) => {
            res.status(400).send(error)
        })

})

app.patch('/update_info/:id', (req, res) => {

    let myid = req.params.id
    let data = req.body

    User.findOneAndUpdate({ _id: myid }, data)
        .then((userFromDB) => {
            if (!userFromDB) {
                res.status(404).send({ message: "User Not Found" })
            } else {
                res.status(200).send({ msg: "User Info Updated !" })
            }
        })
        .catch((error) => {
            res.status(400).send(error)
        })

})

module.exports = app 