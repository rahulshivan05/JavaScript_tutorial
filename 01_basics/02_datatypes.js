'use strict'; //treat all JS code as newer version

// alert(3 + 3); // we are using nodejs,Bun not browser

// console.log(3 + 3);
// console.log('Rahul');

var name = 'Rahul';
let age = 25;
let isLoggedIn = false;
let state = null;

/******** NULL v/s UNDEFINED ********/
/*
null hota hai standalone value for ex.
aapka temperature wala koi application hai apne request kara temperature.
lekin server me kuch bhi temperature nahi aya tab apko 0 display hoga. jab ki 0 to ek temperature.
tab us time par hame null show karwana hai ki kuch bhi respomse nahi aya server se.
*/

/**
 * number
 * bigint
 * string = ""
 * boolean = false, true
 * null = standalone value
 * undefined =
 * symbol = for making unique things
 */

console.log(typeof null); // return object?
console.log(typeof undefined); // return undefined
