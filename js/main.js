const divEmptyBasket = document.getElementById('emptyBasket');
const divNotEmptyBasket = document.getElementById('notEmptyBasket');

const btnMinus = document.getElementById('minus');
const btnPlus = document.getElementById('plus');
const divNumber = document.getElementById('number');
const divCommonNumber = document.getElementById('commonNumber');
const btnAdd = document.getElementById('addBtn');

let currentNumber = parseInt(divNumber.innerText); 
let currentInBasket = 0;

divNotEmptyBasket.style.display = 'none';

btnMinus.onclick = function () {
    if (currentNumber > 1) {
        currentNumber -=1;
    }
    divNumber.innerText = currentNumber;
    divCommonNumber.innerText = currentNumber;
}

btnPlus.onclick = function () {
    currentNumber +=1;
    divNumber.innerText = currentNumber;
    divCommonNumber.innerText = currentNumber;
}

btnAdd.onclick = function () {
    currentInBasket +=currentNumber;
    if (currentInBasket) {
        divNotEmptyBasket.style.display = 'block';
        divEmptyBasket.style.display = 'none';
    }
}