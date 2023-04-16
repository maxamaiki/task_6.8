const consoleLog = document.querySelector('#consoleLog');
const Alert = document.querySelector('#alert');
const Prompt = document.querySelector('#prompt');

consoleLog.addEventListener('click', () => {
  alert('Метод для вывода сообщений в веб-консоль');
})


Alert.addEventListener('click', () => {
  alert('Показывает диалоговое окно с сообщением и кнопкой OK.');
})


Prompt.addEventListener('click', () => {
  prompt('Введите в данное поле текст');
})
