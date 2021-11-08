import './features/authentication.js';
import { apiKeyStorage } from './features/authentication.js';

const button = document.getElementById('reset');
button.onclick = () => {
  apiKeyStorage.clear();
}
