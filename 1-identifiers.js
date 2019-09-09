'use strict';

let name = 'Anna';
const BIRTH_YEAR = 1993;
const greeting = name => {
  console.log(`Hello, ${name}!`);
};
greeting('Anna');
greeting(name);
greeting(BIRTH_YEAR);
