import { Schema, model } from 'mongoose';

// Create Schema
const NoteSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  creator: {type: String,
     required: true
  },
  title: {type: String,
      required: true
  },
  description: {type: String,
     required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Note = model('note', NoteSchema);

export default Note;