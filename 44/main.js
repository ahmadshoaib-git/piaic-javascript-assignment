/**
 *  Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
 *  The function should have one parameter that collects as many items as the function call provides,
 *  and it should print a summary of the sandwich that is being ordered.
 *  Call the function three times, using a different number of arguments each time.
 * */

const prepare_sandwich = (...args) => {
    console.log(`The ordered sandwich will have the following items: ${args.join(', ')}`);
};

prepare_sandwich('cheese', 'chicken', 'onion');
prepare_sandwich('cheese', 'onion', 'jalapeno', 'Mushrooms');
prepare_sandwich('cheese', 'jalapeno', 'Mushrooms', 'Chicken');

