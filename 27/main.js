/** Alien Colors #3: */

const alien_color = 'red';

const compareColor = (alienColorTemp) => {
    if (alienColorTemp === 'green') console.log('Congratulations! You just earned 5 points for shooting the green alien..');
    else if (alienColorTemp === 'yellow') console.log('Congratulations! You just earned 10 points for shooting the yellow alien..');
    else if (alienColorTemp === 'red') console.log('Congratulations! You just earned 15 points for shooting the red alien..');
};

compareColor(alien_color);

