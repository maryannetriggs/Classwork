<<<<<<< HEAD
// // Question 1

// function maxOfTwoNumbers(num1, num2) {
//   return Math.max(num1, num2)
// }
=======
// Question 1
function maxOfTwoNumbers(x, y) {
  if (x > y)  return x
  return y
}
>>>>>>> 108fe3e2907984d8e388fd721a9688c145d651a5

// console.log(maxOfTwoNumbers(9, 4))

// // Other Method...

// function maxOfTwoNumbers(num1, num2) {
//   if (num1 > num2) {
//     return num1
//   } 
//     return num2
// }

<<<<<<< HEAD

// // Question 2

// function isCharacterAVowel(character) {
//   if (character === 'a' || character === 'e' || character === 'i' || character === 'o' ||character === 'u') {
//     return true
//   } else {
//     return false
//   }
// }

// // Other Method...

// function isCharacterAVowel(character) {
//   // either use this and in the switch brackets below (lowerCaseCharacter) const lowerCaseCharacter = character.toLowerCase()
//   switch (character.toLowerCase) {
//     case 'a': return true
//     case 'e': return true
//     case 'i': return true
//     case 'o': return true
//     case 'u': return true
//     default: return false
//   }
// }
=======
// Question 3
function numberOfArguments(){
}
>>>>>>> 108fe3e2907984d8e388fd721a9688c145d651a5

// console.log(isCharacterAVowel('b'))

// // Question 3

// function numberOfArguments(){
//   return arguments.length
// }

// console.log(numberOfArguments())

// // because arguments is a keyword!!!!

// Question 4

function reverseString(string) {
  return string.split('').reverse().join('')
}

console.log(reverseString('reverse dude'))

// Can console.log each step (after split, reverse and join)