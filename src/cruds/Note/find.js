require('../../connection')
const Note = require('../../models/Note');

async function main() {
    const notes =  await Note.find()
    console.log(notes)
}

main()