/**
 * класс с приватными полями
 */
class LocalStorage {
  #value;
  #key;
  #observer;


  constructor(key, observer) { //вызов конструктора в который педераются аргументы key, observer
    const data = localStorage.getItem(key); //неизменяемая переменная data имеющая значение ключа в хранилище 

    this.#key = key; //  приравнивание ключа к полю с именем #key
    this.#value = data; // приравние значения переменной к полю с именем #value
    this.#observer = observer.bind(this); // приравнивание ссылки на существующего наблюдателя к полю с именем #observer, где

    this.#observer(); //отслеживание изменений
  }

  setValue(newValue) { //добавление значения newValue
    this.#value = newValue; //приватное поле #value равняется переменной newValue
    this.#observer();

    localStorage.setItem(this.#key, newValue);  // добавление ключа которое привязано к полю #key и значением ключа newValue
  }

  getValue() { //добавление значения
    return this.#value; //возвращение значение
  }


  clear() { //очистка ключа и его значения
    localStorage.removeItem(this.#key); // обращение к хранилищу, удаление ключа и его значения
    this.#value = undefined; //значение ключа неоппределенное
    this.#observer();
  }
}

export default LocalStorage; //экспортирование класса LocalStorage по умолчанию