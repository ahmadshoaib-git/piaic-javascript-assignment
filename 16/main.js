/** More Guests */
let name = ['Quaid-e-Azam', 'Allama Iqbal', 'Liaquat Ali Khan', 'Sir Zia'];
const guestWhoWontMakeIt = name[2];

name.splice(2, 1, 'Danial Bahi');

name.forEach((friendName) => console.log(`Dear ${friendName}, its a great honour for us to invite you to a grand dinner.`));
console.log(`\n${guestWhoWontMakeIt} wont be able to make it to the dinner due to busy schedule.`);

console.log('\nDear guests, we have been able to arrange a bigger table. It would be honor for us to invite three more guests.\n');

name = ['Dr A Q Khan', ...name];
name.splice(Math.floor(name.length / 2), 0, 'Dr Samar Mubarak');
name.push('Tayyip Erdogan');

name.forEach((friendName) => console.log(`Dear ${friendName}, its a great honour for us to invite you to a grand dinner.`));

