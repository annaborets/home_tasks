/*Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
Досконале число - це число, яке дорівнює сумі всіх своїх дільників.*/

let isPerfect = (num) => {
    let result = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            result += i
        }
    }
    if (result === num && num !== 0) {
        alert(`${num} is perfect`)
    } else {
        alert(`${num} is not perfect`)
    }
};

isPerfect(0)

/*Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону,  
і виводить тільки ті числа з діапазону, які є досконалими. 
Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим..*/
let isPerfect = (num) => {
    let result = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            result += i
        }
    }
    if (result === num && num !== 0) {
        return true;
    } else {
        return false;
    }
};

let isPerfectDiapason = (num1, num2) => {
    for (let i = num1; i < num2; i++) {
        if (isPerfect(i) === true) {
            console.log(`${i} is perfect`)
        }
    }
};
isPerfectDiapason(3, 1000)