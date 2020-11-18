const { Schema, model } = require('mongoose');
//Sin ID en el Screma NO AGREGARLO
const noteSchema = new Schema({
    creator : String,
    date: {
        type: Date,
        default: new Date()
    },
    title : String,
    description : String
})

module.exports = model('Note', noteSchema)