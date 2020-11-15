const mongoose = require('mongoose');
const uri = 'mongodb+srv://user:<user>@cluster0.nuwba.mongodb.net/<dbname>?retryWrites=true&w=majority'
const db = mongoose.connection;

mongoose.connect(uri, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
    .catch(err=> console.log(err))

db.once('open', _ => {
    console.log('This page connectes with database of Altas notas')
})

db.on('error', err => {
    console.log(err)
})