/** Alien Colors #1: */

const alien_color = 'green';
const alien2_color = 'yellow';

const compareColor = (alienColorTemp, color) => {
    if (alienColorTemp === color) console.log('Congratulations! You just earned 5 points.');
    // else console.log('Oops! You missed');
};

compareColor(alien_color, 'green');
compareColor(alien2_color, 'green');

