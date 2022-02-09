//1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

const fiveDigitNumber = prompt('Enter 5-digit number');
const len = fiveDigitNumber.length;
const mid = Math.floor(len / 2);

let isPallindrome = true;

for (let i = 0; i < mid; i++) {
    if (fiveDigitNumber[i] !== fiveDigitNumber[len - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

if (isPallindrome) {
    console.log(`${fiveDigitNumber} is a palindrome`)
} else {
    console.log(`${fiveDigitNumber} is not a palindrome`)
}



/*2.Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
від 200 до 300 - знижка буде 3%; 
від 300 до 500 - 5%;
від 500 і вище - 7%.*/

const price = +prompt('Enter purchase amount');
let discountedPrice = 0;

switch (true) {
    case price >= 200 && price < 300:
        discountedPrice = price * 0.97;
        break;
    case price >= 300 && price < 500:
        discountedPrice = price * 0.95;
        break;
    case price >= 500:
        discountedPrice = price * 0.93;
        break;
    default:
        discountedPrice = price;
        break;
}
console.log(`New purchase amount is ${discountedPrice}`);


/*3.Запитай у користувача 10 чисел і порахуй,
скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних.
 Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.*/
let zeros = 0;
let lessThanZero = 0;
let moreThanZero = 0;
let even = 0;
let odd = 0;
let answerCount = 0;
let currentAnswer;

while (answerCount < 10) {
    currentAnswer = +prompt("Enter a number");

    if (isNaN(currentAnswer)) {
        alert("Only numbers!")
        continue;
    }
    if (currentAnswer === 0) {
        zeros++;
    }
    if (currentAnswer < 0) {
        lessThanZero++;
    }
    if (currentAnswer > 0) {
        moreThanZero++;
    }
    if (currentAnswer % 2 == 0) {
        even++;
    }
    if (currentAnswer % 2 !== 0) {
        odd++;
    }
    answerCount++;
}
console.log(`You entered:
  ${zeros} zeros
  ${lessThanZero} numbers less than 0
  ${moreThanZero} numbers more than 0
  ${even} even numbers
  ${odd} odd numbers`);


//4. Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

let answer;
let currentDayNumber = 0;
let currentDay;

do {
    switch (currentDayNumber) {
        case 0:
            currentDay = "Sunday";
            break;
        case 1:
            currentDay = "Monday";
            break;
        case 2:
            currentDay = "Tuesday";
            break;
        case 3:
            currentDay = "Wednesday";
            break;
        case 4:
            currentDay = "Thursday";
            break;
        case 5:
            currentDay = "Friday";
            break;
        case 6:
            currentDay = "Saturday";
            break;
    }

    currentDayNumber = currentDayNumber >= 6 ? 0 : currentDayNumber + 1;

    answer = confirm(`${currentDay}. Do you want to see the next?`);
} while (answer)
