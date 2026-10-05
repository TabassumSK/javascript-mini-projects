// nullish coalescing operator 
// (??) is used to provide a default value when the left-hand side is null or undefined.
// it fall at case 0, "", false because they are not null or undefined.
// let animal = null;
// console.log(animal ?? "Guest");  //  --> Guest

// let flower = "rose";
// console.log(flower ?? "Guest");  //  --> rose



// optional chaining operator (?.) is used to access the value of a property that may not exist.
// it prevent from showing error, instead it shoes undefined if the property does not exist.
// if property exist it shows this.
// const details = {
//     user: "Sona",
//     age: 20,
//     place: {
//         city: "pune"
//     }
// }
// console.log(details?.place?.city);


// if else statement
// let age = prompt("Enter your age: ");
// if(age > 60) {
//     console.log("You are a senior citizen");
// }
// else if(age > 18) {
//     console.log("You are an adult");
// }
// else {
//     console.log("You are a child");
// }




//loops
// for (let i = 0; i < 5; i++) console.log(i);

// let i = 0;
// while (i < 5) { console.log(i); i++; }

// for (const item of [10, 20, 30]) console.log(item); // values

// for (const key in { a: 1, b: 2 }) console.log(key);  // keys

// const user = {
//     name: "John",
//     age: 25
// };
// for (const key in user) {
//     console.log(user[key]);
// }



// objects
const info = {
    name: "John",
    age: 25,
    city: "New York",
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old, live in ${this.city} and my job is ${this.job}.`);
    }
}
console.log(info.name);
console.log(["age"]);
info.greet();
info.city = "Los Angeles";
info.job = "Engineer";
info.greet();

//arrays
// const arr = [1, 2, 3];
// console.log(arr.push(4));     // add to end
// console.log(arr.pop());        // remove from end
// console.log(arr.length);         // 4 -> 3
// console.log(arr[0]);              // 1
// console.log(arr.includes(2));     // true



//Practice 
// const arr = [1, 2, 3, 4, 5];
// for(const ele of arr) {
//     console.log(ele);
// }
// arr[0] = 100;
// for(const ele of arr) {
//     console.log(ele);
// }


// Destructing
// const numbers = [10, 20, 30];
// const [first, , sec] = numbers;
// console.log(numbers); // [10, 20, 30]
// console.log(first); // 10
// console.log(sec); // 30


// 3. Rename while destructuring
// const user = {
//   name: "john",
//   age: 30
// };
// const { "doe": userName, age: userAge } = user;
// console.log(userName); // john
// console.log(userAge);  // 30

// 4. Default value
// const users = {
//   name: "Rahul"
// };
// const { name, age = 25 } = users;
// console.log(age); // 25


// const user = {
//   name: "Rahul",
//   email: "rahul@gmail.com"
// };
// function showUser({ name, email }) {
//   console.log(name);
//   console.log(email);
// }
// showUser(user);



