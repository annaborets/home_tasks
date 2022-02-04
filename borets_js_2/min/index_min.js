//1.
const sum = 0.1 + 0.2;
console.log(+sum.toFixed(2));

//2.
const a = "1";
const b = 2;
console.log(+a + b);

//3.
const memorySize = prompt('Enter memory size or your flesh drive in Gbytes');
const MB_PER_GB = 1024;
const memorySizeConverted = +memorySize * MB_PER_GB;
const filesAmount = Math.floor(memorySizeConverted / 820);
alert(`You can fit ${filesAmount} files in your flash drive`);