const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener('input', fontSizeChange);

function fontSizeChange(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
}