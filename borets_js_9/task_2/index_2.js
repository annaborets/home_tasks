/*Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

поле, яке зберігає колір маркера;
поле, яке зберігає кількість чорнил у маркері (у відсотках);
метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться до тих пір, поки в маркері є чорнило; один не пробільний символ — це 0,5% чорнил у маркері).
Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера і додай метод для заправки.

Продемонструй роботу написаних методів.*/

const input = document.querySelector('#input');
const text = document.querySelector('#result');
const inkStatus = document.querySelector('#inkStatus');
const button = document.querySelector('.refill');

const ONE_SYMBOL_INK_AMOUNT = 0.5;

class Marker {
    constructor(color, inkAmount) {
        this.color = color;
        this.inkAmount = inkAmount;
        this.lastContentLength = 0;
        text.style.color = this.color;
        inkStatus.innerHTML = this.inkAmount;
    }

    shouldPrint(event) {
        if (event.data && event.data !== " ") {
            return true;
        }
    }

    paintWithMarker(event) {
        if (this.inkAmount <= 0) {
            alert('Out of inks');
            return;
        }

        if (!this.shouldPrint(event)) {
            return;
        }
        text.innerHTML += event.data
        this.inkAmount -= ONE_SYMBOL_INK_AMOUNT;
        inkStatus.innerHTML = this.inkAmount;
        console.log(this.inkAmount);
        this.lastContentLength++;
        return;
    }
}

class RefillableMarker extends Marker {
    refillMarker() {
        this.inkAmount = 100;
        inkStatus.innerHTML = this.inkAmount;
    }
}

let marker2 = new Marker('red', 5);
let marker3 = new RefillableMarker('green', 2);

input.addEventListener('input', function (event) {
    marker3.paintWithMarker(event);
})

button.addEventListener('click', function (event) {
    marker3.refillMarker(event);
    console.log(event)
})

