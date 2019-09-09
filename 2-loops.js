'use strict';

for (let i = 15; i <= 30; i++) {
  if (i % 2) {
    console.log(i);
  }
}

const range = (start, end) => {
  const array = [];
  for (let i = start; i <= end; i++) {
    if (i % 2) {
      array.push(i);
    }
  }
  return array;
};

console.log(range(15, 30));
