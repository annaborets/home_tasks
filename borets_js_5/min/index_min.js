/* твори об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного бака, 
середня витрата палива на 100 км., водії)*/

let carObj = {
    manufacturer: "Audi",
    model: "SQ8",
    releaseYear: 2019,
    averageSpeed: 100,
    fuelTankVolume: 500,
    currentFuelAmount: 200,
    averageFuelLoss: 25,
    drivers: ["Max", "Alex"]
};
//функції для роботи з цим об'єктом:

//Висновок на екран з інформацією про автомобіль.

const carInfo = (carObj) => {
    console.log(`
    Manufacturer: ${carObj.manufacturer}
    Model: ${carObj.model}
    Release year: ${carObj.releaseYear}
    Average Speed: ${carObj.averageSpeed}
    Fuel tank volume: ${carObj.fuelTankVolume}
    Current fuel amount: ${carObj.currentFuelAmount}
    Average Fuel Loss per 100 km: ${carObj.averageFuelLoss}
    Drivers: ${carObj.drivers}
    `);
};

carInfo(carObj);

//Додавання водія, який має право керувати автомобілем.

const newDriver = (carObj, driverName) => {
    carObj.drivers.push(driverName);
};
newDriver(carObj, "Oleg");
carInfo(carObj);

//Заправка автомобіля.

const refuel = (carObj, fuelAmount) => {
    if (
        fuelAmount &&
        carObj.fuelTankVolume - carObj.currentFuelAmount > fuelAmount
    ) {
        carObj.currentFuelAmount = carObj.currentFuelAmount + fuelAmount;
    } else {
        carObj.currentFuelAmount = carObj.fuelTankVolume;
    }
};

refuel(carObj, 200);
carInfo(carObj);

/*Підрахунок необхідного часу для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину,
а також потрібно перевіряти чи має право водій керувати даним автомобілем (ім'я водія функція приймає другим аргументом). Також потрібно перевірити чи вистачить палива,
для здійснення цієї поїздки, 
якщо палива не вистачить потрібно вивести повідомлення, про це і запропонувати заправити автомобіль*/

const carDrive = (distance, driverName) => {
    let time = distance / carObj.averageSpeed;
    let isAuthorised = carObj.drivers.includes(driverName) ? true : false;
    let fuelPerOneKm = carObj.averageFuelLoss / 100;
    let hoursToRest = Math.floor(time / 4);

    if (time > 4) {
        time += hoursToRest;
    }

    if (!isAuthorised) {
        console.log("You're not authorised");
        return;
    }

    if (fuelPerOneKm * distance > carObj.currentFuelAmount) {
        console.log("Please refuel your car");
        return;
    }

    console.log(`You need ${time} hours for your jorney`);
};

carDrive(1000, "Oleg");
