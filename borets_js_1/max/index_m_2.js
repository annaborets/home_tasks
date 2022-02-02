const distance = prompt('Enter distance between start and destination points in kilometers');
const time = prompt('How many hours would you like to get to the destination point?');
const speed = distance / time;
const awswer = alert(`Move at speed ${speed} km/h to be on time!`);