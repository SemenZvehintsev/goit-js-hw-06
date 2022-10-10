const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputText.addEventListener('input', typingText);

function typingText(event) {
    if (event.currentTarget.value === '') {outputText.textContent = 'Anonymous'}
    else {outputText.textContent = event.currentTarget.value}
}