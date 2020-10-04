export class Note {
  constructor(data, { deleteNoteFromDB }) {
    this._data = data;
    this._deleteNoteFromDB = deleteNoteFromDB;
  }

  _getNoteElement () {
    return document.querySelector('#note')
      .content
      .firstElementChild
      .cloneNode(true);
  }

  _deleteNote (evt) {
    this._deleteNoteFromDB(evt);
    this._noteElement.remove();
    this._noteElement = null;
  }

  _setEventListeners () {
    this._deleteButton = this._noteElement.querySelector('.notes__delete-button');
    this._deleteButton.addEventListener('click', (evt) => {
      this._deleteNote(evt);
    });
  }

  generateNote () {
    this._noteElement = this._getNoteElement();
    this._noteElement.querySelector('.notes__text').textContent = this._data.text;
    this._setEventListeners();
    return this._noteElement;
  }
}
