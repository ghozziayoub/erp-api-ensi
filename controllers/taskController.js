const express = require('express')

const Task = require('./../models/task')
const User = require('./../models/user')

const app = express()

app.get('/', (req, res) => {
    res.status(200).send("Welcome to task controller")
})

app.post('/add', async (req, res) => {

    try {
        let data = req.body

        let user = await User.findOne({ _id: data.member_id })

        if (!user) {
            res.status(404).send({ msg: "User not found" })
        } else {
            let task = new Task({
                title: data.title,
                description: data.description,
                label: data.label,
                member_id: data.member_id,
                member: user
            })

            let savedTask = await task.save()
            res.status(201).send({ msg: "Task added" })
        }

    } catch (error) {
        res.status(400).send(error)
    }

})

app.get('/all', async (req, res) => {

    try {
        let tasks = await Task.find()
        res.status(200).send(tasks)
    } catch (error) {
        res.status(400).send(error)
    }

})

module.exports = app