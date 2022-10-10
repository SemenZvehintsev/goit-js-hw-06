function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorChangeBtn = document.querySelector('.change-color');
const colorText = document.querySelector('.color');
const body = document.querySelector('body');

colorChangeBtn.addEventListener('click', colorChange);

function colorChange() {
  body.style.backgroundColor = getRandomHexColor();
  colorText.textContent = getRandomHexColor();}