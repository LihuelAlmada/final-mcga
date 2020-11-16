require('../../connection')

const Note = require('../../models/Note')

const createNotes = async () => {
    const firstnote = new Note({
        id: 1,
        creator: 'facundo',
        title: 'alta nota',
        description: 'Jugar futbol'
    })
        await firstnote.save();

    const secondnote = new Note({
        id: 2,
        creator: 'carlos',
        title: 'alta joda',
        description: 'comprar cerveza'
    })
        await secondnote.save();
   console.log(firstnote, secondnote)
}

createNotes();