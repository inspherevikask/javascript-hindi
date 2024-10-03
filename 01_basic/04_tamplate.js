// Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const vikas = "I'm" + ' ' +firstName+ ' ' +',a'+ ' ' +(year - birthYear)+ 'year old' +job+'!'; // old  old version
console.log(vikas);

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!'; // old version
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`; // ES6 New version
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


let test = "xyz";
console.log (`this is ${test}`)