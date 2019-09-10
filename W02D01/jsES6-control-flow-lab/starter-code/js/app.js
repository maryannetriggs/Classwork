// FizzBuzz


// for (let i = 1; i <= 101; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('Fizzbuzz')
//   }  else if (i % 3 === 0) {
//     console.log('Fizz')
//   } else if (i % 5 === 0) {
//     console.log('Buzz')
//   } else {
//     console.log(i)
//   }
// }

// Guess the number

let playing = true
let userInput = 0

while (playing) {
  const randomNumber = Math.ceil(Math.random() * 10)
  console.log(randomNumber)

  while (userInput !== randomNumber) {
    userInput = parseInt(prompt('Guess the magic number from 1 and 10'))
  }

  playing = confirm('You won! Would you like to play again?')
}

// if (userInput === randomNumber) {
//   window.confirm('You won! Would you like to play again?')
//   prompt('Guess the magic number from 1 and 10')
// } else {
//   window.confirm('You lost! Would you like to guess again?')
//   prompt('Guess the magic number from 1 and 10')
// }

// Password strength checker

// const userPassword = prompt('Please enter a new password')

// let numCriteria = userPassword.includes([0-9])

// console.log(numCriteria)


// if (userPassword.length > 5 && 

// Mastermind
