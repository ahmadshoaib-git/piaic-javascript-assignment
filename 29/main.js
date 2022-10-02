/** 
 * Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
 */

const favorite_fruits = ['apple', 'orange', 'mango'];

const checkFruit = (fruit) => favorite_fruits.find((fFruit) => fFruit === fruit);

if (checkFruit('apple')) console.log('You really like apples!');

if (checkFruit('orange')) console.log('You really like oranges!');

if (checkFruit('mango')) console.log('You really like mangoes!');

if (checkFruit('banana')) console.log('You really like bananas!');

if (checkFruit('pineapple')) console.log('You really like pineapples!');

