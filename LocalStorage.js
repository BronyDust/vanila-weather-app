class LocalStorage { //класс с приватными полями
  #value;
  #key;
  #observer;

  constructor(key, observer) { //вызов конструктора в который педераются аргументы key, observer
    const data = localStorage.getItem(key); //неизменяемая переменная data, которая является наблюдателем и обращение к хранилющу с методом getItem для полученияя ключа

    this.#key = key; //  приравнивание ключа к полю с именем #key
    this.#value = data; // приравние значения переменной к полю с именем #value
    this.#observer = observer.bind(this); // приравнивание ссылки на существующего наблюдателя к полю с именем #observer, где

    this.#observer(); //отслеживание изменений
  }

  setValue(newValue) { //добавление значения newValue
    this.#value = newValue; //приватное поле #value ровняется переменной newValue
    this.#observer();

    localStorage.setItem(this.#key, newValue);  // добавление ключа которое привязано к полю #key и значением ключа newValue
  }

  getValue() { //добавление значения
    return this.#value; //возвращение значение
  }

  clear() { //очистка
    localStorage.removeItem(this.#key); // обращение к хранилищу удаление ключа
    this.#value = undefined; //значение ключа имеет неоппределенное значение
    this.#observer();
  }
}

export default LocalStorage; //экспортирование по умолчанию файла LocalStorage
