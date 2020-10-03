export class PopupWithAddForm {
  constructor(popupSelector, { submit }) {
    this._popupSelector = popupSelector;
    this._submit = submit;
    this._popupElement = document.querySelector(this._popupSelector);
    this._formElement = this._popupElement.querySelector('.popup__form');
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  _getInputValue () {
    this._inputsList = Array.from(this._popupElement.querySelectorAll('.popup__input'));
    const inputsData = {};
    this._inputsList.forEach(input => {
      inputsData[input.name] = input.value;
    })
    return inputsData;
  }

  _handleSubmit (evt) {
    evt.preventDefault();
    this._submit(this._getInputValue())
    this._close();
  }

  _handleClick (evt) {
    if(evt.target.classList.contains('popup__close-button')) {
      this._close();
    }
  }

  _removeEventListeners () {
    this._formElement.removeEventListener('submit', this._handleSubmit);
    this._popupElement.removeEventListener('click', this._handleClick);
  }

  _setEventListeners () {
    this._formElement.addEventListener('submit', this._handleSubmit);
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
