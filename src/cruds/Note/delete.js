require('../../connection')
const Note = require('../../models/Note');

const someFunction = async () => {
    const result = await Note.findOneAndDelete({id:1})
}

someFunction();