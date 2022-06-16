//? Exercise: 1
// * First letter of a string must be capital

const str = 'Hello World';
const pattern = /^[A-Z]/;

console.log(pattern.test(str));

//? Exercise: 2
// * String should begin with digit

const str2 = '14 street';
const pattern2 = /^[0-9]/; // Or we use /^\d/

console.log(pattern2.test(str2));
