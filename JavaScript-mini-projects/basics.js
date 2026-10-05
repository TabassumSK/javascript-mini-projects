
// function testVar() {
//   if (true) {
//     var x = "VarScope";
//     var x = "sona"; // redeclaration is allowed
//     x = 100;
//   }
//   console.log(x); // "VarScope" — leaks out of the block(function scope)
// }
// testVar();

// function testLet() {
//   if (true) {
//     let y = "LetScope";
//     y = "mini";  // redeclaration is not allowed but reassignment is allowed
//     console.log(y);
//   }
//   // console.log(y); // ReferenceError — y is block-scoped
// }
// testLet();

// // const PI = 3.14;
// // PI = 3.15; // TypeError: Assignment to constant variable

// let name = "Alex";
// if (true) {
//     name = "John";
// }
// console.log(name);




//arrays
let arr = [2, 4, 6, 8, 10];
console.log(arr[3]);

arr.push(12);
console.log(arr);

arr.pop();
console.log(arr);

console.log(arr.length);
console.log(arr.includes(6));

//mutability
const nm = "lio";
console.log(nm.toUpperCase());
console.log(nm);