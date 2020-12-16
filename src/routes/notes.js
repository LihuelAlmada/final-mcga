import { Router } from 'express';
import auth from '../../middleware/auth';
// Item Model
import Note from '../models/Note';

const router = Router();

/**
 * @route   GET api/notes
 * @desc    Get All Notes
 * @access  Public
 */

router.get('/', async (req, res) => {
  try {
    const notes = await Item.find();
    if (!notes) throw Error('No notes');

    res.status(200).json(notes);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   POST api/notes
 * @desc    Create An Note
 * @access  Private
 */

router.post('/', auth, async (req, res) => {
  const newNote = new Note({
    name: req.body.name
  });

  try {
    const note = await newNote.save();
    if (!note) throw Error('Something went wrong saving the note');

    res.status(200).json(note);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   DELETE api/notes/:id
 * @desc    Delete A Note
 * @access  Private
 */

router.delete('/:id', auth, async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) throw Error('No item found');

    const removed = await item.remove();
    if (!removed)
      throw Error('Something went wrong while trying to delete the note');

    res.status(200).json({ success: true });
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
});

export default router;
