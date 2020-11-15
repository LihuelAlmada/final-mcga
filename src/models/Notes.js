const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    id : Number,
    day : Date,
    creator : String,
    title : String,
    description : String
})

module.exports = model('Note', noteSchema)