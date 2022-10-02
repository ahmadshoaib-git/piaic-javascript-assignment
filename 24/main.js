/** More Conditional Tests */
let name = 'Ahmad Shoaib';
let age = 28;
let maritalStatus = 'UNMARRIED';
let city = 'Islamabad';
let sector = 'F-8';
let car = 'honda';
let mobile = 'iphone';
let tv = 'lg';
let laptop = 'Macbook';
let screen = 'HP';

const fruits = ['apple', 'orange', 'mango'];

console.log('Your name is Ahmad Shoaib');
console.log(name === 'Ahmad Shoaib');

console.log('Your age is less than 30');
console.log(age < 30);

console.log('Your marital status is unmarried');
console.log(maritalStatus === 'unmarried');

console.log('You live in Islamabad');
console.log(city === 'Islamabad');

console.log('You dont live in sector G-8');
console.log(sector !== 'G-8');

console.log('Your car is honda');
console.log(car.toLocaleLowerCase() === 'honda');

console.log('Your mobile is of brand Samsung or iphone');
console.log(mobile === 'Samsung' || mobile === 'iphone');

console.log('Your tv is of brand Samsung');
console.log(tv === 'Samsung');

console.log('Your laptop is Thinkpad');
console.log(laptop === 'Thinkpad');

console.log('Your monitor screen is of Dell');
console.log(sector === 'Dell');

const printFoundOrNot = (fruit) => {
    if (fruit) console.log('Item is present in array!');
    else console.log('Unable to find the Item in array!!');
};

printFoundOrNot(fruits.find((fruit) => fruit === 'apple'));
printFoundOrNot(fruits.find((fruit) => fruit === 'peach'));

