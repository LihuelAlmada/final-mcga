const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    id : Number,
    date: {
        type: Date,
        default: new Date()
    },
    creator : String,
    title : String,
    description : String
})

module.exports = model('Note', noteSchema)