console.log('Hello World')

// Introduction to scope
// always declare variables befor you use them

let sound = 'roar'

{
  let sound = 'wail'
  console.log(sound)

}
console.log(sound)

// If Statements

/*  if (expression) {
 console.log('action to occur')
}
*/

let animal = 'lion'
if (animal === 'tiger') {
  console.log('roar')
}

if (1) {
  console.log('statement was truthy')
}

// Mathmatical operators > greater than and less than < 

if (animal === 'lion') {
  console.log('roar') 
} else if (animal === 'tiger') {
  console.log('ragh')
}

if (animal === 'lion') {
  console.log('roar') 
} else {
  console.log('ragh')
}

// Logical Operators AND && and OR ||

if (true && true) {
  console.log('this statement was true')
}

if (true || false) {
  console.log('one of these arguements was true')
}

// Remember to use the typeof check

// Equality. == type coersion

true === true // true
true == // true
true  === 1 // false
true == 1 // true


// Switch Statements

// animal = 'tiger'

switch (animal) {
  case 'lion':
    console.log('animal is a lion')
    break
  case 'tiger':
    console.log('animal is a tiger')  
    break
  default:
    console.log('animal is not a lion')
    break
}

/* while(true) {
  console.log('hello')
}
*/

// ; only required within for statements and after break in switch statements

// Never do that - how much RAM does your Chrome have? 

let i = 0
while (i < 5) {
  console.log('hello')
  i++
}

let j = 0
do {
  console.log(j++)
} while (j < 5)

console.log('HammerTime')

let k = 5
do {
  console.log(k++)
} while (k < 5)

/*
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}
*/ // remember scope...


