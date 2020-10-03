import {PopupWithAddForm} from '../components/Popup.js';

import {addNoteButton} from '../utils/constants.js';

const addNotePopup = new PopupWithAddForm('.popup-add-note', {
  submit: (data) => {
    console.log(data)
  }
 });

addNoteButton.addEventListener('click', () => {
  addNotePopup.open();
})

