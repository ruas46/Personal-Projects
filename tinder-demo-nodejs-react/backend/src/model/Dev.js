const { Schema, model } = require('mongoose')

const DevSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required
    },
    bio: String,
    avatar: {
        type: String,
        required
    }
}, {
    timestamps: true
})

module.exports = model('Dev', DevSchema)