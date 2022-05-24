/*Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

поле, що зберігає радіус кола;
get-властивість, яке повертає радіус кола;
set-властивість, що встановлює радіус кола;
get-властивість, яке повертає діаметр кола;
метод, що обчислює площу кола;
метод, що обчислює довжину кола.
Продемонструй роботу властивостей і методів.*/

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        if (isNaN(value) == true) {
            console.log('Enter number!');
            return;
        } else if (value <= 0) {
            console.log('Enter positive number');
            return;
        }
        this._radius = value;
    }
    circleAreaCalc() {
        return (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
    }
    circumferenceCalc() {
        return (Math.PI * 2 * this.radius).toFixed(2);
    }
}

let circleNew = new Circle(25)
console.log(circleNew);
console.log(circleNew.circleAreaCalc())
console.log(circleNew.circumferenceCalc())
