/** Dinner Guests: */

const name = ['Quaid-e-Azam', 'Allama Iqbal', 'Liaquat Ali Khan', 'Sir Zia'];

name.forEach((friendName) => console.log(`Dear ${friendName}, its a great honour for us to invite you to a grand dinner.`));

const printOriginalList = () => {
    console.log('\nOriginal List of Names >\n');
    name.forEach((tName) => console.log(tName));
};

console.log('\nSorted List of names >\n');

let tempName = [...name];
tempName.sort().forEach((tName) => console.log(tName));

printOriginalList();

console.log('\nSorted List of name in reverse alphabetical order>\n');

tempName = [...name];
tempName.sort((a, b) => b - a).forEach((tName) => console.log(tName));

printOriginalList();

console.log('\nReversing order of the list >\n');

name.reverse().forEach((tName) => console.log(tName));

console.log('\nReversing order of the list again >\n');

name.reverse().forEach((tName) => console.log(tName));

console.log('\nSorting the list in alphabetical order >\n');

name.sort().forEach((tName) => console.log(tName));

console.log('\nSorting the list in reverse alphabetical order >\n');

name.sort((a, b) => b - a).forEach((tName) => console.log(tName));

console.log(`\nTotal number of honorable guests invited are ${name?.length}`);

