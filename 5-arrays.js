'use strict';

const directory = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'John', phone: '+380935554853' },
  { name: 'Michael', phone: '+380442031543' },
];

const findPhoneByName = name => {
  let phone = '';
  for (const contact of directory) {
    if (contact.name === name) {
      phone = contact.phone;
    }
  }
  return phone;
};
console.log(findPhoneByName('Marcus Aurelius'));
