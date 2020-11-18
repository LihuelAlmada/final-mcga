const { Schema, model } = require('mongoose')
//recordar no agregar ID
const userSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    firstName: String,
    lastName: String,
    email: String,

    birthday: {
        type: Date,
        default: new Date()
    },
    city: String,
    phoneNumber: Number,
})

module.exports = model('User', userSchema);