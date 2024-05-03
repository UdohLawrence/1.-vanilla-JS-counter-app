
let count = 0;
const countAddButton = document.querySelector('#add');
const countSubtractButton = document.querySelector('#subtract');
const countValue = document.querySelector('#count-value');

countValue.textContent = count;

// console.log(countValue);

countAddButton.addEventListener('click', () => {
    count++;
    countValue.textContent = count;
})
countSubtractButton.addEventListener('click', () => {
    count--;
    countValue.textContent = count;
})