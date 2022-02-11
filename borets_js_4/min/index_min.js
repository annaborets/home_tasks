//1. Напиши всі можливі варіанти створення функцій.

//function declaration

function sayHi() {
    alert("Hello");
}

//function expression  

let sayHi = function () {
    alert("Hello");
};

//arrow function

let sayHi = () => alert("Hello!");

/* 2.Напиши функцію, яка приймає 2 числа і повертає : 
-1, якщо перше число менше, ніж друге;  
1 - якщо перше число більше, ніж друге;  
0 - якщо числа рівні.*/

let funcComparison = (a, b) => {
    if (a < b) {
        return -1
    } else if (a > b) {
        return 1
    } else {
        return 0
    }
}

alert(funcComparison(30, 30));

//3.Напиши функцію, яка обчислює факторіал переданого їй числа.


let calcFactorial = (a) => {
    if (a === 0 || a === 1) {
        return 1;
    } else if (a < 0) {
        return -1;
    }
    for (var i = a - 1; i >= 1; i--) {
        a *= i;
    }
    return a;
}
alert(calcFactorial(0));

//4.Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.


let mergeNumbers = (a, b, c) => {
    if (b < 0) {
        b = -b;
    }
    if (c < 0) {
        c = -c;
    }
    return +("" + a + b + c);
}
alert(mergeNumbers(0, -2, 3));

//Створи функцію, яка буде виводити кількість переданих їй аргументів.


let calcNumbers = () => {
    return arguments.length
}

alert(calcNumbers(1, 2, 3, 5, 6, 7, 8, 8, 9, 9, 9, 0, 9))

/*Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.  
Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.*/


let calcArea = (a, b = a) => {
    if (a < 0 || b < 0) {
        alert("Wrong value")
        return
    }
    return a * b
}

alert(calcArea(9, 13))
