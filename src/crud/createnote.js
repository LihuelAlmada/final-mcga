require('../connection')

const Note = require('../models/Notes')

const createNotes = async () => {
    const firstnote = new Note({
        creator: 'facundo',
        title: 'alta nota',
        description: 'Jugar futbol'
    })
        await firstnote.save();

    const secondnote = new Note({
        creator: 'carlos',
        title: 'alta joda',
        description: 'comprar cerveza'
    })
        await secondnote.save();
   //console.log(firstnote, secondnote)
}

createNotes();