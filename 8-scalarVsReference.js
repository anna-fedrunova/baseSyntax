'use strict';

{
  const inc = n => n - 2;
  const a = 5;
  const b = inc(a); console.dir({ a, b });
}
{
  const inc = num => num.n -= 2;
  const obj = { n: 5 };
  inc(obj);
  console.dir(obj);
}
