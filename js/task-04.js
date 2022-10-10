let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

decrementBtn.addEventListener("click", calcDecr);
incrementBtn.addEventListener("click", calcIncr);

function calcDecr() {
    counterValue -= 1;
    value.textContent = counterValue;};

function calcIncr() {
    counterValue += 1;
    value.textContent = counterValue;};