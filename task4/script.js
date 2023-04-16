const userTestText = document.querySelector('a');
userTestText.onclick = function (event) {
    event.preventDefault;
    const userText = prompt('Введите текст');
    userTestText.textContent = userText;
}