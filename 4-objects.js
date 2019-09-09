'use strict';

const PERSON = { name: 'Vitalii' };
let person = { name: 'Anna' };
console.log(`person: ${person.name}, PERSON: ${PERSON.name}`);

person.name = 'Jane';
PERSON.name = 'John';
console.log(`person: ${person.name}, PERSON: ${PERSON.name}`);
/* Имя в объекте, присвоенном константе, изменилось,
потому что объект - ссылочный тип данных. В переменной PERSON хранится ссылка
на область памяти, выделенную для этого объекта.
Ссылка не меняется, поэтому ошибки нет. */

person = { city: 'Kharkiv' };
/* PERSON = { city: 'Kharkiv'};
TypeError: Assignment to constant variable.
Попытка присвоить другое значение константе (поменять ссылку) */
console.log(`person: ${person.name}, PERSON: ${PERSON.name}`);

const createUser = (name, city) => ({
  name,
  city
});
console.log(createUser('Marcus Aurelius', 'Roma'));
