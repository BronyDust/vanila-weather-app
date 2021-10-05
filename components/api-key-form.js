class APIKeyForm extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = 'api-key-form element';
  }
}

customElements.define('api-key-form', APIKeyForm)
