/** Seeing the World */
let places = ['Makkah', 'Madina', 'Jerusalem', 'Istanbul', 'Babil', 'Damascus'];

const printOriginalList = () => {
    console.log('\nOriginal List >\n');
    places.forEach((place) => console.log(place));
};

places.forEach((place) => console.log(place));

console.log('\nSorted List of places >\n');

let tempPlaces = [...places];
tempPlaces.sort().forEach((place) => console.log(place));

printOriginalList();

console.log('\nSorted List of places in reverse alphabetical order>\n');

tempPlaces = [...places];
tempPlaces.sort((a, b) => b - a).forEach((place) => console.log(place));

printOriginalList();

console.log('\nReversing order of the list >\n');

places.reverse().forEach((place) => console.log(place));

console.log('\nReversing order of the list again >\n');

places.reverse().forEach((place) => console.log(place));

console.log('\nSorting the list in alphabetical order >\n');

places.sort().forEach((place) => console.log(place));

console.log('\nSorting the list in reverse alphabetical order >\n');

places.sort((a, b) => b - a).forEach((place) => console.log(place));

