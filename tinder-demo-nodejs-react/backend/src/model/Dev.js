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
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }]
}, {
    timestamps: true
})

module.exports = model('Dev', DevSchema)