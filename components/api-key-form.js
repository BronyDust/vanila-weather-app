/**
 * Функция заглушка
 */
const noop = () => {};

/**
 * Имя кастомного события формы получения ключа пользователя
 */
export const SUBMIT_KEY_EVENT_NAME = '#vwa-submit-key-form';

class APIKeyForm extends HTMLElement {
  #inputId = 'api_key_input';
  #boundFormSubmitHandler = noop; // Приватные методы должны быть предопределены до вызова конструктора, так что здесь изначально стоит функция-пустышка noop. Далее этот метод будет переопределен

  #formSubmitHandler(event) {
    event.preventDefault(); // Отменить стандартное поведение события

    const { target } = event; // Достать ссылку на автора события
    if (target instanceof HTMLFormElement) { // Если автор - html форма (как ожидается)...
      /**
       * Формируем FormData на основе html формы
       * 
       * Каждый инпут станет полем. Ключ - атрибут name
       */
      const formData = new FormData(target);

      // Получаем значение поля по имени (это и есть api ключ)
      const takenApiKey = formData.get(this.#inputId);
      /**
       * Объект кастомного ивента, который используется, чтобы уведомить всех "слушателей" в системе
       */
      const submitEvent = new CustomEvent(SUBMIT_KEY_EVENT_NAME, {
        detail: takenApiKey
      });
      // Запускаем ивент с полем detail, чтобы передать данные
      this.dispatchEvent(submitEvent);
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

    popupForm.onsubmit = this.#boundFormSubmitHandler; // Коннект слушателя на событие submit (контекст изменен, см. конструктор)
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

    // Проброс контекста раз и навсегда, чтобы не делать это на каждый render
    this.#boundFormSubmitHandler = this.#formSubmitHandler.bind(this);
  }

  connectedCallback() {
    this.#render();
  }
}

customElements.define('api-key-form', APIKeyForm);
