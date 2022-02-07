//1.
const depositMoney = prompt('Enter amount of money to deposit');
const YEAR_RATE = 0.05;
const percents = (depositMoney * YEAR_RATE / 12 * 2);
alert(`You will gain ${percents.toFixed(2)} for 2 months!`);

//2.
2 && 0 && 3 // (0)

2 || 0 || 3 // (2)

2 && 0 || 3 // (3)
