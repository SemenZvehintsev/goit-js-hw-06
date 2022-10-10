const categories= document.querySelectorAll('.item');

console.log(`Number of categories: ` + categories.length);

const fun = categories.forEach(category => {
    const title = category.firstElementChild.textContent;
    const elements = category.lastElementChild;
    const numberOfElements = elements.children;
    
    return console.log(`Category: ` + title) + console.log(`Elements: ` + numberOfElements.length);
});






