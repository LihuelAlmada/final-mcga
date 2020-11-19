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
    
    const thirdnote = new Note({
        id: 3,
        creator: 'Tomas',
        title: 'base de datos',
        description: 'agregar DB'
    })
        await thirdnote.save();

    const fournote = new Note({
        id: 4,
        creator: 'Pablo',
        title: 'heroku',
        description: 'subir app' 
    })
        await fournote.save();
    
    const fivenote= new Note ({
        id: 5,
        creator: 'Leandro',
        title: 'alto partido',
        description: 'Mirar partido de futbol' 
    })
        await fivenote.save();
}

createNotes();