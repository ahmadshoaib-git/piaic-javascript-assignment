/**
 *  Great Magicians: Start with a copy of your program from Exercise 39.
 *  Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
 *  Call show_magicians() to see that the list has actually been modified.
 * */

let magicians = ['Magician A', 'Magician B', 'Magician C'];

const make_great = (magiciansList) => {
    return magiciansList.map((mag) => `Great ${mag}`);
};

const show_magicians = (name) => console.log(name);

magicians.forEach((name) => show_magicians(name));

console.log('\n-----------\n');

magicians = make_great(magicians);

magicians.forEach((name) => show_magicians(name));

