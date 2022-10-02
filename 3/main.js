/**
 * Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
 */

const personalName = 'ahmad Shoaib';
const titleCase = (str) =>
    str
        .toLowerCase()
        .split(' ')
        .map((word) => word.replace(word[0], word[0].toUpperCase()))
        .join(' ');
console.log(personalName.toLowerCase());
console.log(personalName.toUpperCase());
console.log(titleCase(personalName));

