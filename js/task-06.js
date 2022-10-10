const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', inputControl);

function inputControl(event) {
    const symbols = event.currentTarget.value;
    console.log(symbols);
    if (symbols.length < inputText.dataset.length) {
        inputText.classList.remove('valid');
        inputText.classList.add('invalid');
    } else {
        inputText.classList.remove('invalid');
        inputText.classList.add('valid');
    }
}