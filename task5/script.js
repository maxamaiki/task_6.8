let textElement;
let input = document.querySelector('input');
let newText = document.querySelector('#duplicateField');

// Устаревший альтернативный вариант:
// input.onkeyup = function() {
//      textElement = input.value;
//      newText.textContent = textElement; 
//  }

input.addEventListener ('keyup', function() {
    textElement = input.value;
    newText.textContent = textElement;
});

document.querySelector('button').addEventListener('click', function() {
    let button = textElement;
    console.log(button)
});
document.querySelector('button').addEventListener('click', function(event) {
    input.value = event.preventDefault();
});

document.querySelector('button').addEventListener('click', function(event) {
    newText.textContent = event.preventDefault();
  });
document.querySelector('button').addEventListener('click', function() {
    input.value = "";
  });






