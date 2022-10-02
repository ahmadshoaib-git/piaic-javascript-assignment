/** Shrinking Guest List */
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

console.log('\nDear guests, we would like to apiologies that our dinner table wont arrive in time hence we would only me inviting 2 distinguished guests.\n');

while (name?.length > 2) {
    console.log(`Dear ${name.pop()}, we are extremely sorry that due to dinner table issue, we wont be able to invite you for dinner.`);
}
console.log('\n');

name.forEach((friendName) => console.log(`Dear ${friendName}, its a great honour for us to invite you to a grand dinner, you are still invited`));

name.pop();
name.pop();

console.log('Guest List >', name);

