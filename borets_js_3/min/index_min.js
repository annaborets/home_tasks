//1.Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
const age = +prompt('Enter your age');

switch (true) {
    case age >= 0 && age <= 11:
        alert('You are child!');
        break;
    case age >= 12 && age <= 17:
        alert('You are teenager!');
        break;
    case age >= 18 && age <= 59:
        alert('You are adult!');
        break;
    case age >= 60:
        alert('You are pensioneer!');
        break;
    default:
        alert('You need to enter your age!');
        break;
}


//2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
let a = +prompt('Enter number from 0 to 9');
switch (a) {
    case 0:
        console.log(')');
        break;
    case 1:
        console.log('!');
        break;
    case 2:
        console.log('@');
        break;
    case 3:
        console.log('#');
        break;
    case 4:
        console.log('$');
        break;
    case 5:
        console.log('%');
        break;
    case 6:
        console.log('^');
        break;
    case 7:
        console.log('&');
        break;
    case 8:
        console.log('*');
        break;
    case 9:
        console.log('(');
        break;
    default:
        console.log('Wrong value');
}

//3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.

const firstNum = +prompt('Enter start point');
const lastNum = +prompt('Enter last point');
let result = 0;

for (let i = firstNum; i <= lastNum; i++) {
    result += i;

}
console.log(result);

//4.Запитай у користувача 2 числа і знайди найбільший спільний дільник.

let firstNum = +prompt('Enter first number');
let secondNum = +prompt('Enter second number');
let divisor = 0;

while (secondNum != firstNum) {
    if (secondNum > firstNum) {
        secondNum = secondNum - firstNum;
    } else {
        firstNum = firstNum - secondNum
    }
}
divisor = firstNum;
console.log(divisor);

//5.Запитай у користувача число і виведи всі дільники цього числа.
const enteredNumber = +prompt('Enter natural number');
let divisorRes = 0;
for (let i = 1; i <= enteredNumber; i++) {
    if (enteredNumber % i == 0) {
        console.log(i);
    }
}
