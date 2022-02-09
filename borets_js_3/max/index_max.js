/*Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: 
кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». 
Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. 
Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N 
(буде корисним почитати про алгоритм: "бінарний пошук").*/

alert('Think of a number between 1 and 100 and I`ll guess it!');

let start = 0;
let stop = 100;
let middle = Math.floor(start + (stop - start) / 2);
let answer;

while (true) {
    answer = prompt(`Is your number > ${middle}, < ${middle}, == ${middle}?`)

    if (answer === '==') {
        alert(`Your number is ${middle}`);
        break;
    }

    if (answer === '>') {
        start = middle + 1;
        middle = Math.floor(start + (stop - start) / 2);
    } else if (answer === '<') {
        stop = middle - 1;
        middle = Math.floor(start + (stop - start) / 2);
    } else {
        alert('Error');
        break;
    }
}


//2. Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

for (let j = 2; j <= 9; j++) {
    document.write("<div style='float: left; width: 70px;'>");
    for (let i = 1; i <= 10; i++) {
        document.write(j + "*" + i + "=" + (i * j) + "<br>");
    }
    document.write("</div>");
}
//3. Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.

let day = +prompt('Enter day DD');
let month = +prompt('Enter month MM');
let year = +prompt('Enter year YYYY');

if (day < 0 || day > 31) {
    alert('Invalid day')
}
if (month < 0 || month > 12) {
    alert('Invalid month')
}
if (year < 0) {
    alert('Invalid year');
}
if (day === 29 && year % 4 !== 0) {
    alert('Missing day in this year')
}

if (day < 28) {
    day++;
} else if (day === 28) {
    if (month === 02 && year % 4 === 0) {
        day++
    } else {
        day = 01;
        month++
    }
} else if (day === 29) {
    if (month === 02) {
        day = 01;
        month++;
    }
} else if (day === 30) {
    if (month === 04 || month === 06 || month === 09 || month === 10) {
        day = 01;
        month++;
    }
} else if (day === 31 && month === 12) {
    day = 01;
    month = 01;
    year++
} else {
    day = 01;
    month++
}
if (day <= 9) {
    day = '0' + day;
}
if (month <= 9) {
    month = "0" + month;
}
alert(`The next day is ${day}.${month}.${year}`)
