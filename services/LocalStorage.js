class LocalStorage {
  #value;
  #key;
  #observer;

  constructor(key, observer) {
    const data = localStorage.getItem(key);

    this.#key = key;
    this.#value = data;
    this.#observer = observer.bind(this);

    this.#observer();
  }

  setValue(newValue) {
    this.#value = newValue;
    this.#observer();

    localStorage.setItem(this.#key, newValue);
  }

  getValue() { 
    return this.#value;
  }

  clear() {
    localStorage.removeItem(this.#key);
    this.#value = undefined;
    this.#observer();
  }
}

export default LocalStorage;
