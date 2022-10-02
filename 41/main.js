/**
 *  Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
 * */

const magicians = ['Magician A', 'Magician B', 'Magician C'];

const show_magicians = (name) => console.log(name);

magicians.forEach((name) => show_magicians(name));

