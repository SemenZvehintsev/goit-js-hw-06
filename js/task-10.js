function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');


createBtn.addEventListener('click', createBoxes);

function createBoxes(amount) {
  amount = input.value;
  const numberOfBoxes = boxes.children.length;
  for (let i = numberOfBoxes; i < amount; i += 1) {
    const newdiv = document.createElement("div");
    const parametrs = 20 + 10 * i;
    newdiv.style.width = `${parametrs}px`;
    newdiv.style.height = `${parametrs}px`;
    newdiv.classList.add('item');
    newdiv.style.backgroundColor = getRandomHexColor();
    boxes.append(newdiv);
  }
}

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {

  const numberOfBoxes = boxes.children.length;
  for (let i = 0; i < numberOfBoxes; i += 1) {
    const boxToDelete = boxes.firstChild;
    boxToDelete.remove();
  }
}