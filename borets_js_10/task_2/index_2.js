const numberBtn = document.querySelectorAll('.number');
const operationBtn = document.querySelectorAll('.operation');
const deleteBtn = document.querySelector('.delete');
const equalBtn = document.querySelector('.equal');
const screenArea = document.querySelector('.screen');
const keys = document.querySelector('.keys')

let number1;
let number2;
let operation;
let finished = false;

const clear = () => {
    screenArea.textContent = '';
}

const calculateResult = () => {
    number2 = screenArea.textContent;

    let result;

    switch (operation) {
        case '+':
            result = +number1 + +number2;
            break;
        case '-':
            result = +number1 - +number2;
            break;
        case 'x':
            result = +number1 * +number2;
            break;
        case '/':
            result = +number1 / +number2;
            break;
    }

    screenArea.textContent = isNaN(result) ? 'Error' : result;
    finished = true;
}

const handler = (event) => {
    const element = event.target;
    const isNumber = element.classList.contains('number');
    const isOperation = element.classList.contains('operation');
    const isClear = element.classList.contains('delete');
    const isEqual = element.classList.contains('equal');

    switch (true) {
        case isNumber:
            if (finished) {
                clear();
                finished = false;
            }
            screenArea.textContent += element.innerText;
            break;
        case isOperation:
            number1 = screenArea.textContent;
            clear();
            operation = element.innerText;
            break;
        case isClear:
            clear();
            break;
        case isEqual:
            calculateResult();
            break;
        default:
            break;
    }
}

keys.addEventListener('click', handler)
