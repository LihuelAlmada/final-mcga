require('../../connection');
const Note = require('../../models/Note');

async function getNote() {
    const note = await Note.findOne({id:1})
    //console.log(note)
}   

getNote();