export class NotesList {
  constructor(notesListContainer) {
    this._notesListContainer = notesListContainer;
  }

  addNote (noteElement) {
    this._notesListContainer.prepend(noteElement)
  }
}
