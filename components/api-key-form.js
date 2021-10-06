class APIKeyForm extends HTMLElement {
  #render() {
    customElements.define('api-key-form', APIKeyForm)
  }
  constructor() {
    super();
    let APIKeyForm = document.createElement('api-key-form');
    this.innerHTML = 'api-key-form element';
  }
}
