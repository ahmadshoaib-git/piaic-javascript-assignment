/**
 *  Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
 * */

const make_shirt = (size, message) => {
    if (size === 'large' || size === 'medium') console.log(`Shirt size ${size}, message printed: I love Javascript`);
    else console.log(`Shirt size ${size}, message printed: ${message}`);
};

make_shirt('medium', '');
make_shirt('extra large', 'I love Airforce');
make_shirt('large', '');
make_shirt('small', 'I love Pokemon');

