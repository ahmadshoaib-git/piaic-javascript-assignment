/**
 *  Unchanged Magicians: Start with your work from Exercise 40.
 *  Call the function make_great() with a copy of the array of magicians’ names.
 *  Because the original array will be unchanged, return the new array and store it in a separate array.
 *  Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
 * */

let magicians = ['Magician A', 'Magician B', 'Magician C'];
let copyMagicians = [...magicians];

const make_great = (magiciansList) => {
    return magiciansList.map((mag) => `Great ${mag}`);
};

const show_magicians = (name) => console.log(name);

magicians.forEach((name) => show_magicians(name));

console.log('\nPrinting Original -----------\n');

copyMagicians = make_great(magicians);

magicians.forEach((name) => show_magicians(name));

console.log('\nPrinting Great -----------\n');

copyMagicians.forEach((name) => show_magicians(name));

