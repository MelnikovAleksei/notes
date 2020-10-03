export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popupElement = document.querySelector(this._popupSelector);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick (evt) {
    if(evt.target.classList.contains('popup__close-button')) {
      this._close();
    }
  }

  _removeEventListeners () {
    this._popupElement.removeEventListener('click', this._handleClick);
  }

  _setEventListeners () {
    this._popupElement.addEventListener('click', this._handleClick);
  }

  _close () {
    this._removeEventListeners();
    this._popupElement.classList.remove('popup_opened');
  }

  open () {
    this._setEventListeners();
    this._popupElement.classList.add('popup_opened');
  }
}
