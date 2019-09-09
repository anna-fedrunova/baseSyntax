'use strict';

const directory = {
  'Marcus Aurelius': '+380445554433',
  John: '+380935554853',
  Michael: '+380442031543',
};

const findPhoneByName = name => {
  let phone = '';
  for (const contactName in directory) {
    if (contactName === name) {
      phone = directory[contactName];
    }
  }
  return phone;
};
console.log(findPhoneByName('Marcus Aurelius'));
