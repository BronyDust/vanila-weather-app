class APIKeyForm extends HTMLElement {
  #render() {
    this.innerHTML = ''; // Cleanup previous component view

    const popupRoot = document.createElement('div');
    popupRoot.classList.add('popup');

    const popupBody = document.createElement('div');
    popupBody.classList.add('popup__body');
    popupRoot.appendChild(popupBody);

    const popupForm = document.createElement('form');
    popupForm.setAttribute('action', '#');
    popupForm.setAttribute('method', 'post');

    const popupTitle = document.createElement('h2');
    popupTitle.classList.add('popup__title');

    const popupInput = document.createElement('input');
    popupInput.classList.add('popup__input');
    popupInput.setAttribute('type', 'text');
    popupInput.setAttribute('text', ' API-ключ');
    popupInput.setAttribute('pattern', '[A-Za-z0-9]{32}');

    const popupBTNForm = document.createElement('div');
    popupBTNForm.classList.add('popup__btn-form');

    const popupButton = document.createElement('button');
    popupButton.classList.add('popup__button');

    this.appendChild(popupRoot);
  }

  constructor() {
    super();

    this.#render();
  }
}

customElements.define('api-key-form', APIKeyForm);
