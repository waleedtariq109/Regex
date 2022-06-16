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

//? Exercise: 3
// * String only contain digits

const str3 = '0303993872773';
const pattern3 = /^[0-9]+$/;

console.log(pattern3.test(str3));

//? Exercise: 4
// * String only contain letters

const str4 = 'hellOworld';
const pattern4 = /^[a-z]+$/i;

console.log(pattern4.test(str4));
