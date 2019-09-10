// Functions

// // Function Declaration - Named functions are available everywhere at the beginning as browser has already interpreted js. PREFERRED way to declare function for this course
// function hello() {
//   console.log('Hello!!')
// }

// // Calling/Invoking Function
// hello()

// // Assigning variable to an anon function

// const hey = function() {
//   console.log('Hey!!')
// }

// hey()

// // same syntax to call it! Basically doing the same thing

// Actual Function Examples


// const double = function(num) {
//   return num * 2
// }

// console.log(double(2))

// const multiplyTogether = function(x, y) {
//   return x * y
// }

// console.log(multiplyTogether(2, 2))

// function sayHello(name) {
//   return `Hello my name is ${name}`
// }

// console.log(sayHello('Mary-Anne'))

// // ES6 updates, basically a placeholder parameter

// function sayHello(name = 'Emma') {
//   return `Hello my name is ${name}`
// }

// console.log(sayHello())

// // Scope - local (or function) and global.

// const a = 1

// function getScore() {
//   const b = 2, c = 3

//   function add() {
//     return a + b + c
//   }
//   return add
// } 

// getScore()

// const a = 1

// function add() {
//  console.log('This isn\'t adding!')
// }

// function getScore (b) {
//   const c = 3

//   function add() {
//     return a + b + c
//   }

//   const myAddedNumber = add()
//   return myAddedNumber
// }

// console.log(add())



// function sayName() {
//   const name = 'Mary-Anne'
//   return `Hi, my name is ${name}`
// }

// console.log(name)

// function myStringFunction() {
//   return 'some random string'
// }

// console.log(myStringFunction())
// console.log(myStringFunction)
// console.log(typeof myStringFunction)
// console.log(typeof myStringFunction())
// console.log(myStringFunction().length)
// console.log(myStringFunction().toUpperCase())

