/**
 * Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
 * Albert Einstein once said, “A person who never made a mistake never tried anything new.”
 */

const quote = {
    text: 'You drown not by falling into a river, but by staying submerged in it.',
    author: 'Paulo Coelho',
};
/**
 * Here in this question, we needed to print the quote by author in a described format.
 * I created an object named quote for that, which will having its text and its author's name.
 */
console.log(`${quote.author} once said "${quote.text}"`);

