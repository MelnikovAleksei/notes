export class NotesList {
  constructor(notesListSelector) {
    this._notesListSelector = notesListSelector;
  }

  addNote (noteElement) {
    this._notesListSelector.append(noteElement)
  }
}
