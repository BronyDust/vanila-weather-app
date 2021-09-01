const apiKey = localStorage.getItem('api_key'); // обращение к локальному хранилищу, метод getItem используется для получение значения ключа api_key

if (!apiKey) {  // если apiKey имеет значение false
  const newKey = prompt('Enter API key'); //  выводит в окне браузера окно с полем для ввода ключа 
  if (!newKey) throw new Error('Empty'); //если значение переменной newKey является false, то появляется ошибка
  if (newKey.length !== 31) throw new Error('Too short'); //если длина ключа не ровна 31 символам, то появляется ошибка

  localStorage.setItem('api_ke  y', newKey); //добавление ключа с именем api_key и значением newKey
}

console.log('DONE');
