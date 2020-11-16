require('../../connection');
const Note = require('../../models/Note');

const someFunction = async () => {
    const result = await Note.update({id:1})
}

someFunction();