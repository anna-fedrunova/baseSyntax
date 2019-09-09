'use strict';

const average = (a, b) => (a + b) / 2;
const square = x => x ** 2; 
const cube = x => Math.pow(x, 3);

for (let i = 0; i < 10; i++) {
  console.log(average(square(i), cube(i)));
}
