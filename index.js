import LocalStorage from './services/LocalStorage.js';

const apiKeyStorage = new LocalStorage('api_key', function() {
  try {
    const apiKey = this.getValue();

    if (!apiKey) {
      const newKey = prompt('Enter API key');
      if (!newKey) throw new Error('Empty');
      if (newKey.length !== 31) throw new Error('Too short');

      this.setValue(newKey);
    }
  } catch (error) {
    alert(error.message);
    this.clear();
  }
});

const button = document.getElementById('reset');
button.onclick = () => {
  apiKeyStorage.clear();
}
