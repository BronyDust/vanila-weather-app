/**
 * Здесь описана логика авторизации в приложении
 */

import APIKeyForm, { SUBMIT_KEY_EVENT_NAME } from '../components/api-key-form.js';
import LocalStorage from '../services/LocalStorage.js';

export const APIKeyFormComponent = new APIKeyForm();

export const apiKeyStorage = new LocalStorage('api_key', function() {
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
