/*Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
Для виведення часу на екран.
Зміни часу на передане кількість секунд.
Зміни часу на передане кількість хвилин.
Зміни часу на передане кількість годин.*/

let d = new Date();
const timeObj = {
    objSeconds: d.getSeconds(),
    objMinutes: d.getMinutes(),
    objHours: d.getHours(),
    timeToScreen() {
        const formattedHours = this.objHours < 10 ? "0" + this.objHours : this.objHours
        const formattedMinuets = this.objMinutes < 10 ? "0" + this.objMinutes : this.objMinutes
        const formattedSeconds = this.objSeconds < 10 ? "0" + this.objSeconds : this.objSeconds

        console.log(`Now is ${formattedHours}:${formattedMinuets}:${formattedSeconds}`);
    },
    changeObjSeconds(additionSeconds) {
        this.objSeconds += additionSeconds;
        if (this.objSeconds > 60) {
            while (this.objSeconds >= 60) {
                this.objSeconds -= 60;
                this.objMinutes++;
            }
        }
    },
    changeObjMinutes(additionMinutes) {
        this.objMinutes += additionMinutes;
        if (this.objMinutes > 60) {
            while (this.objMinutes >= 60) {
                this.objMinutes -= 60;
                this.objHours++;
                if (this.objHours > 24) {
                    this.objHours -= 24;
                }
            }
        }
    },
    changeObjHours: function (additionHours) {
        this.objHours += additionHours;
        if (this.objHours > 24) {
            while (this.objHours > 24) {
                this.objHours -= 24;
            }
        }
    },
}
timeObj.timeToScreen();
timeObj.changeObjSeconds(15);
timeObj.timeToScreen();
timeObj.changeObjMinutes(10);
timeObj.timeToScreen();
timeObj.changeObjHours(75);
timeObj.timeToScreen()
