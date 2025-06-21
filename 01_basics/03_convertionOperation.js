let score = "33";
let scoreString = "33asdfg"
console.log(typeof( score )); // string


let valuInScore = Number(score); // convert string to number
let valuInScoreString = Number(scoreString); // convert string to number
console.log(typeof valuInScore); // number
console.log(typeof valuInScoreString); // number
console.log(valuInScore); // 33
console.log(valuInScoreString); // NaN (Not a Number)
//value of null is 0;

/* *********************** Operations *********************** */

console.log(1 + 2); // 3
console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + "2"); // 12
console.log("1" + "2" + 2); // 122
console.log(1 + 2 + "2"); // 32
console.log(1 + 2 + "2" + 3); // 3223

console.log(+true); // 1
console.log(+false); // 0
console.log(+""); // 0