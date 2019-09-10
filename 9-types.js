'use strict';

const array = [true, 'hello', 5, NaN, 12, -200, { flag: true}, false, false, 'word', { n: 5 }, 6n, undefined, null, 5.13];
{
const hash = {
   number: 0, 
   string: 0, 
   boolean: 0,
   object: 0, 
   undefined: 0,
   bigint: 0
}
for (const el of array) {
  hash[typeof el]++
}
console.dir(hash);
}
{
  const hash = {}
  for (const el of array) {
    if(typeof el in hash){
      hash[typeof el] ++;
    } else hash[typeof el] = 1;
  }
  console.dir(hash);
  }
