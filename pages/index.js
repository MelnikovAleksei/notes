import {Popup} from '../components/Popup.js';

import {addNoteButton} from '../utils/constants.js';

const addNotePopup = new Popup('.popup-add-note');

addNoteButton.addEventListener('click', () => {
  addNotePopup.open();
})

