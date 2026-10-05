// // function declaration
// function func1() {
//     console.log("Hello, world!");
// }
// func1();


// // function expression
// const func2 = function (a, b) {
//     console.log(a+b);
// }
// func2(2, 3);


// // arrow function
// const func3 = (name) => {
//     console.log(`My name is ${name}`);
// }
// func3("Sona");


// // default parameter of function
// const func4 = (city = "mumbai") => {
//     console.log(`I live in ${city}`);
// }
// func4("pune");



//closure
// function greet() {
//     let info = `Hi, I am a closure function`;
//     console.log("working");

//     function display() {
//         console.log(info);
//     }
//     return display();
// }
// greet();

// function counter() {
//     let count = 0;

//     return function () {
//         count++;
//         return count;
//     };
// }
// const increment = counter();
// console.log(increment()); // 1
// console.log(increment()); // 2
// console.log(increment()); // 3


// //callback
// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback(1000);
// }

// greet("Alex", function (delay) {
//     setTimeout(() => {
//         console.log("Welcome!");
//     }, delay);
// });

// setTimeout(function () {
//     console.log("Hello Sona");
// }, 2000);

// setTimeout(function(){console.log("Well done")}, 1000);



//this keyword
// const user = {
//     name: "Alex",

//     greet: function () {
//         console.log(this.name);
//     }
// };

// user.greet();


//prototype
// function person(name) {
//     person.prototype.greet = function() {
//         console.log(`Hello, my name is ${name}`);
//     }
// }

// const user1 = new person("Alex");
// user1.greet();



// const user = {
//   name: "Rahul",
//   greet() {
//     console.log(this.name);
//     function inner() {
//       console.log(this.name);
//     }
//     inner();
//   }
// };
// user.greet();



const user = {
    name: "Rahul",

    greet: function (name) {
        console.log(name);
    }
};

user.greet("joe");



