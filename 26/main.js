/** Alien Colors #2: */

const alien_color = 'yellow';

const compareColor = (alienColorTemp) => {
    if (alienColorTemp === 'green') console.log('Congratulations! You just earned 5 points for shooting the alien..');
    else console.log('Congratulations! You just earned 10 points for shooting the alien..');
};

compareColor(alien_color);

