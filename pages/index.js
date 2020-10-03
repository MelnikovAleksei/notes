import { PopupWithAddForm } from '../components/Popup.js';
import { NotesList } from '../components/NotesList.js';
import { Note } from '../components/Note.js';

import { addNoteButton, noteListContainer } from '../utils/constants.js';

const noteList = new NotesList(noteListContainer);

const createNewNote = (data) => {
  const note = new Note(data);
  return note;
}

const addNotePopup = new PopupWithAddForm('.popup-add-note', {
  submit: (data) => {
    const note = createNewNote(data);
    const noteElement = note.generateNote();
    noteList.addNote(noteElement);
  }
 });

addNoteButton.addEventListener('click', () => {
  addNotePopup.open();
})

