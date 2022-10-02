/**
 *  Cars: Write a function that stores information about a car in a Object.
 *  The function should always receive a manufacturer and a model name.
 *  It should then accept an arbitrary number of keyword arguments.
 *  Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
 *  Print the Object that’s returned to make sure all the information was stored correctly.
 * */

const getCar = (manufacturer, model, ...args) => {
    const car = {
        manufacturer: manufacturer,
        model: model,
    };
    args.length > 0 &&
        args.forEach((arg) => {
            const key = Object.keys(arg)[0];
            const value = Object.values(arg)[0];
            // console.log('====> ', arg, key, value);
            car[key] = value;
        });
    return car;
};

console.log(getCar('Honda', 'City', { color: 'white' }));
console.log(getCar('Honda', 'Accord', { color: 'grey' }, { airbags: 10 }));
console.log(getCar('Honda', 'BRV', { color: 'grey' }, { airbags: 10 }, { gear: 6 }));

