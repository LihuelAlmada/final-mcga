const mongoose = require('mongoose');
const uri = 'mongodb+srv://fernando:1234@cluster-mcga.dc5pi.mongodb.net/<dbname>?retryWrites=true&w=majority'
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