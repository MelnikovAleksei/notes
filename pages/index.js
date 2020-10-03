import {PopupWithAddForm} from '../components/Popup.js';
import {NotesList} from '../components/NotesList.js';

import {addNoteButton} from '../utils/constants.js';

const noteList = new NotesList('.notes');

const addNotePopup = new PopupWithAddForm('.popup-add-note', {
  submit: (data) => {
    console.log(data)
  }
 });

addNoteButton.addEventListener('click', () => {
  addNotePopup.open();
})

