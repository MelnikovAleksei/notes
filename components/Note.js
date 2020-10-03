export class Note {
  constructor(data) {
    this._data = data;
  }

  _getNoteElement () {
    return document.querySelector('#note')
      .content
      .firstElementChild
      .cloneNode(true);
  }

  _deleteNote () {
    this._noteElement.remove();
    this._noteElement = null;
  }

  _setEventListeners () {
    this._deleteButton = this._noteElement.querySelector('.notes__delete-button');
    this._deleteButton.addEventListener('click', () => {
      this._deleteNote();
    });
  }

  generateNote () {
    this._noteElement = this._getNoteElement();
    this._noteElement.querySelector('.notes__text').textContent = this._data.text;
    this._setEventListeners();
    return this._noteElement;
  }
}
