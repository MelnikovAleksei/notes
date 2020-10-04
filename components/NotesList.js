export class NotesList {
  constructor(notesListContainer) {
    this._notesListContainer = notesListContainer;
  }

  removeNotes () {
    while (this._notesListContainer.firstChild) {
      this._notesListContainer.removeChild(this._notesListContainer.firstChild);
    }
  }

  addNote (noteElement) {
    this._notesListContainer.prepend(noteElement)
  }
}
