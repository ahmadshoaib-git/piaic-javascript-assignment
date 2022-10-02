/**
 * Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
 */

const transportationMode = ['Car', 'Airplane'];
const statement = ['I would like to own a', 'I would like to travel in'];

transportationMode.forEach((transport, index) => console.log(`${statement[index]} ${transport}`));

