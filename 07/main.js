/**
 * Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
 */

function MathsOperations() {
    this.add = (a, b) => a + b;
    this.subtract = (a, b) => a - b;
    this.multiply = (a, b) => a * b;
    this.divide = (a, b) => a / b;
}

/**
 *  Here in this question we needed to perform some mathematical operations.
 *  Keeping reusability in mind, I have created a javascript constructor function.
 *  This constructor function will contain all the mathematical operations we might perform.
 */

const operations = new MathsOperations();

console.log(operations.add(6, 2));
console.log(operations.subtract(10, 2));
console.log(operations.multiply(2, 4));
console.log(operations.divide(64, 8));

