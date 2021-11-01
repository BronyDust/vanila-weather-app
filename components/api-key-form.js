class APIKeyForm extends HTMLElement {
  #inputId = 'api_key_input';

  #formSubmitHandler(event) {
    event.preventDefault();

    const { target } = event;
    if (target instanceof HTMLFormElement) {
      const formData = new FormData(target);

      const takenApiKey = formData.get(this.#inputId);
      console.log(takenApiKey);
    }
  }

  /**
   * Отрисовать view компонента. Учтено обнуление предыдущего view
   */
  #render() {
    this.innerHTML = ''; // Cleanup previous component view

    const popupRoot = document.createElement('div');
    popupRoot.classList.add('popup');

    const popupBody = document.createElement('div');
    popupBody.classList.add('popup__body');
    popupRoot.appendChild(popupBody);

    const popupForm = document.createElement('form');

    popupForm.onsubmit = this.#boundFormSubmitHandler;
    popupForm.classList.add('popup__form')
    popupForm.setAttribute('action', '#');
    popupForm.setAttribute('method', 'post');
    popupBody.appendChild(popupForm);

    const popupTitle = document.createElement('label');
    popupTitle.innerHTML = 'Введите API-ключ';
    popupTitle.setAttribute('for', this.#inputId);
    popupTitle.classList.add('popup__title');
    popupForm.appendChild(popupTitle);

    const popupInput = document.createElement('input');
    popupInput.id = this.#inputId;
    popupInput.classList.add('popup__input');
    popupInput.setAttribute('type', 'text');
    popupInput.setAttribute('name', this.#inputId);
    popupInput.setAttribute('text', ' API-ключ');
    popupInput.setAttribute('pattern', '[A-Za-z0-9]{32}');
    popupForm.appendChild(popupInput);

    const popupButton = document.createElement('button');
    popupButton.classList.add('popup__button');
    popupButton.innerHTML = 'Отправить';
    popupForm.appendChild(popupButton);

    this.appendChild(popupRoot);
  }

  constructor() {
    super();

    this.#boundFormSubmitHandler = this.#formSubmitHandler.bind(this);
    this.#render();
  }
}

customElements.define('api-key-form', APIKeyForm);
