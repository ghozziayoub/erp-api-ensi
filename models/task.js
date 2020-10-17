const mongoose = require('mongoose')

const Task = mongoose.model('tasks', {

    title: {
        type: String,
        require: true
    },

    description: {
        type: String,
        require: true
    },

    label: {
        type: String,
        require: true
    },
    //planned-task work-in-progress finished-task
    state: {
        type: String,
        default: "planned-tasks"
    },

    member_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'users',
        require: true
    },

    member: {
        type: mongoose.Schema.Types.Mixed,
        require: true
    }

})

module.exports = Task