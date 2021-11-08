import APIKeyForm, { SUBMIT_KEY_EVENT_NAME } from './components/api-key-form.js';
import LocalStorage from './services/LocalStorage.js';

const APIKeyFormComponent = new APIKeyForm();

const apiKeyStorage = new LocalStorage('api_key', function() {
  try {
    const apiKey = this.getValue();

    if (!apiKey) {
      document.body.appendChild(APIKeyFormComponent);
    } else {
      APIKeyFormComponent.remove();
    }
  } catch (error) {
    alert(error.message);
    this.clear();
  }
});

APIKeyFormComponent.addEventListener(SUBMIT_KEY_EVENT_NAME, ({ detail }) => {
  if (detail) apiKeyStorage.setValue(detail);
});

const button = document.getElementById('reset');
button.onclick = () => {
  apiKeyStorage.clear();
}
