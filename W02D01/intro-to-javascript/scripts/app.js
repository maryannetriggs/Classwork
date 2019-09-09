// Start by checking script page is linked

console.log('Hello World')

// no var any more. const is default - a variable that is not reassigned
const myNameConst = 'mary-Anne'
let myNameLet = 'Mary-Anne'

// Primative Data Types
// Strings

console.log('this is a string'.length) // prints 16. .length is a property (asks a question) no brackets, doesnt get invoked

console.log('hello'.charAt(0)) // prints h. .charAt is a method (manipulates it)
console.log('Hey everyone!'.toUpperCase()) //another method

const myString = 'My name is Mary-Anne'
console.log(myString.toUpperCase()) // because the variable myString has data type string

console.log(myString.replace('Mary-Anne', 'Jack'))

console.log(myNameConst.charAt(0).toUpperCase() + myNameConst.slice(1))

// older method
console.log('hello ' + 'world')

// newer method - template literal string
const hello = 'mouse'
const world = 'world'
console.log(`${hello}    ${world}`)

// Numbers

console.log(0.1 + 0.2)

// 1 does not equal '1'

// properties 

console.log(1 + 2)
console.log(1 - 2)
console.log(1 / 2)
console.log(1 * 2)
console.log(5 % 2)

console.log(Math.sqrt(9))
console.log(Math.random())
console.log(Math.PI)
console.log(Math.round(9.5))
console.log(Math.floor(9.8))
console.log(Math.ceil(9.2))
console.log(Math.max(3, 5, 6))

// methods

console.log(Math.PI.toFixed()) //turns number input to output string

//useful... typeof is an inbuild option to find data type

console.log(typeof 'hello')

const myVar = '4'
console.log(typeof myVar)

// some methods can mutate original. turned string into a number

const result = parseInt(myVar)
console.log(typeof result)
console.log(result)

// NaN is a toxic number. Any operated acted upon a NaN number will also equal NaN

let myVariable = 010 // prints 10
myVariable = '3.5'
myVariable = parseFloat(myVariable)

console.log(String(5))


// adding a string to a number - weird
console.log('3' + 5 + 4) // prints 354 - becomes a string
console.log(3 + 4 + '5') // prints 75 - a different kind of way of becoming a string

console.log('' + 10) // prints a string of 10 - '10'

console.log(typeof `${20}`)
console.log(`${20 + 40}`)

// Boolean

true
false

console.log(Boolean('true')) //true
console.log(Boolean('false')) //false
console.log(Boolean('a string')) //truthy
console.log(Boolean('')) //falsey
console.log(Boolean(' ')) //truthy
console.log(Boolean(1)) //truthy
console.log(Boolean(0)) //falsey
console.log(Boolean('0')) //falsey
console.log(Boolean(-1)) //truthy
console.log(Boolean(NaN)) //falsey
console.log(Boolean(null)) // falsey
console.log(Boolean(undefined)) // falsey

// More Lesson

var name // wont allow this shit in const
console.log(name)
name = 'Jack'
console.log(name)

//Chrome will backfill data on certain refreshes which is why this still works. Only works currently on var not let

let shizzle
console.log(shizzle)

// = is for assignment, not for equals
