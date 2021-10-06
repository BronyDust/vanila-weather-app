class APIKeyForm extends HTMLElement {
  #render() {
    this.innerHTML = ''; // Cleanup previous component view

    const popupBody = document.createElement('div');
    popupBody.classList.add('popup__body');

    this.appendChild(popupBody);
  }

  constructor() {
    super();

    this.#render();
  }
}

customElements.define('api-key-form', APIKeyForm);
