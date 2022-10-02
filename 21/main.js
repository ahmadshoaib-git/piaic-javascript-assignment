/** Think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items. */

let cars = [];

cars = [
    ...cars,
    {
        brand: 'Honda',
        name: 'City',
        model: 2022,
    },
];
cars = [
    ...cars,
    {
        brand: 'Honda',
        name: 'Civic',
        model: 2022,
    },
];
cars = [
    ...cars,
    {
        brand: 'Toyota',
        name: 'Corolla',
        model: 2022,
    },
];
cars = [
    ...cars,
    {
        brand: 'Toyota',
        name: 'Yaris',
        model: 2022,
    },
];
cars = [
    ...cars,
    {
        brand: 'Toyota',
        name: 'Altis',
        model: 2022,
    },
];

console.log('List of cars >', cars);

