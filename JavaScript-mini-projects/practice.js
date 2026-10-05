// // divisible by 3 and 5
// for (let i = 1; i <= 50; i++) {
//   if (i % 3 == 0 || i % 5 == 0) {
//     console.log(i);
//   }
// }

// // power of 2 grater than 1000
// let pow = 1;
// while (pow <= 1000) {
//   pow *= 2;
// }
// console.log(pow);

// //for of
// const arr = [4, 8, 15, 16, 23, 42];
// sum = 0;
// for (let n of arr) {
//   sum += n;
// }
// console.log(`Total sum is : ${sum}`);

//arr methods
// const users = [
//   {
//     name: "A",
//     age: 25,
//   },
//   { 
//     name: "B",
//     age: 17
//   },
//   { 
//     name: "C",
//     age: 30 
//   },
// ];
// const adults = users.filter(n => n.age >= 18);
// console.log(adults);

// const userName = users.map(n => n.name);
// console.log(userName);

// const firstUser = users.find(n => (n.age < 18));
// console.log(firstUser);



//reverse string
const str = "sona";
const reversed = str.split("").reverse().join("");
console.log(reversed);

const arr = [1, 2, 3, 4, 5];
console.log(arr.reverse());

const names = "James".split("");
let start = 0; 
let end = names.length-1;
while(start < end) {
  let temp = names[start];
  names[start] = names[end];
  names[end] = temp;

  start++;
  end--;
}
console.log(names.join(""));