let score = '33abc';

// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber); // return NaN

/* Note:- 
1. Jab ham "33" -> 33
2. "33abc" -> NaN
3. true -> 1
4. null -> 0
5. undefined -> NaN
*/

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 -> true
// "rahul" -> true
// 0 -> false
// "" -> false
