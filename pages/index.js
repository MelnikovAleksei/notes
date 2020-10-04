import { PopupWithAddForm } from '../components/PopupWithAddForm.js';
import { NotesList } from '../components/NotesList.js';
import { Note } from '../components/Note.js';

import { addNoteButton, noteListContainer } from '../utils/constants.js';

const noteList = new NotesList(noteListContainer);

let db;

window.onload = function () {
  let request = window.indexedDB.open('notes_db', 1);

  request.onerror = function () {
    console.log('Error');
  }

  request.onsuccess = function () {
    console.log('Database opened successfully');
    db = request.result;
    displayData();
  }

  request.onupgradeneeded = function (evt) {
    let db = evt.target.result;

    let objectStore = db.createObjectStore('notes_os', {keyPath: 'id', autoIncrement: true});

    objectStore.createIndex('name', 'name', { unique: false });

    console.log('Database setup complete');
  }
}

const displayData = () => {
  noteList.removeNotes();
  let objectStore = db.transaction('notes_os').objectStore('notes_os');
    objectStore.openCursor().onsuccess = function (evt) {
        let cursor = evt.target.result;
        if (cursor) {
          const note = createNewNote(cursor.value);
          const noteElement = note.generateNote();
          noteElement.setAttribute('data-note-id', cursor.value.id);
          noteList.addNote(noteElement);
          cursor.continue();
        }
    }
}

const addNotes = (data) => {
  let transaction = db.transaction(['notes_os'], 'readwrite');
  let objectStore = transaction.objectStore('notes_os');
  objectStore.add(data);
  transaction.oncomplete = function () {
    console.log('Transaction completed: database modification finished.');
    displayData()
  }
  transaction.onerror = function () {
    console.log('Transaction not opened due to error');
  }
}

const createNewNote = (data) => {
  const note = new Note(data, {
    deleteNoteFromDB: (evt) => {
      let noteId = Number(evt.target.parentNode.getAttribute('data-note-id'));
      let transaction = db.transaction(['notes_os'], 'readwrite');
      let objectsStore = transaction.objectStore('notes_os');
      objectsStore.delete(noteId);
      transaction.oncomplete = function () {
        console.log('Note ' + noteId + ' deleted.');
      }
    }
   });
  return note;
}

const addNotePopup = new PopupWithAddForm('.popup-add-note', {
  submit: (data) => {
    addNotes(data);
  }
 });

addNoteButton.addEventListener('click', () => {
  addNotePopup.open();
})

