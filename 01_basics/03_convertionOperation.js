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