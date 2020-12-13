const mongoose = require('mongoose')


const noteSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    creator: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true}
})

module.exports = mongoose.model('Note', noteSchema)