//1.
const moneyAmount = prompt("Enter amount of money in your wallet");
const chocolatePrice = prompt("Enter price of 1 chocolate");
const chocolateAmount = Math.floor(moneyAmount / chocolatePrice);
const residualMoney = (moneyAmount - chocolatePrice * chocolateAmount)
alert(`You can buy ${chocolateAmount} chocolates and save ${residualMoney.toFixed(2)} money!`);

//2.
const number = prompt('Enter three-digit number');
const hundreds = Math.floor(number / 100);
const firstResidual = Math.floor(number % 100);
const tens = Math.floor(firstResidual / 10);
const secondResidual = Math.floor(firstResidual % 10);
alert(`Back to front is ${secondResidual}${tens}${hundreds}`);
