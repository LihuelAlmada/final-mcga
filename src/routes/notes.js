//Modelo, definimos que datos guardamos

const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const notes = require('../notes.json');

router.get('/', (req, res) => {
    res.json(notes);
});

router.post('/', (req, res) => {
    const { day, task } = req.body;
    if (day && task) {
        const id = notes.length + 1;
        const newNote = {...req.body, id};
        console.log(newNote);
        notes.push(newNote);
        res.json(notes);
    } else {
        res.send('peticion error');
    }

    res.send('received');
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const { day, task } = req.body;
    if (day && task) {
        _.each(notes, (note, i) => {
            if (note.id == id) {
                note.day = day;
                note.task = task;
            }
        });
        res.json(notes);
    } else {
        res.status(500).json({error: 'Esto es un error.'});
    }   
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(notes, (note, i) => {
        if (note.id == id) {
            notes.splice(i, 1);
        }
    });
    res.send(notes);
});

module.exports = router;