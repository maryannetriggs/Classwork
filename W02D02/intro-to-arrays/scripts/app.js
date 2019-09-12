// // // Items within an array are called elements. Zero indexed

// // const myArray = [1, true, 'hello']
// // console.log(myArray[0])
// // console.log(myArray)
// // console.log(typeof myArray) // arrays are types of arrays
// // console.log(typeof myArray[0])

// // console.log(myArray.length)

// // // index of last item in the array is length - 1

// // console.log(myArray.toString())

// // const secondArray = [1, 2]

// // // Merging 2 arrays into 1 new array

// // const newArray = myArray.concat(secondArray)
// // console.log(newArray) 
// // console.log(myArray)
// // console.log(secondArray)

// // // Some mutating methods will permenantly change arrays even if they are const variables e.g pop()

// // myArray.reverse()
// // console.log(myArray)

// // // slice, pop, reverse, push, shift, push, splice, forEach

// // Passing a function as an argument into the inbuilt method on an array. Creates a new anon function inside the method. Callback functions.

// const animals = ['lion', 'tiger', 'owl', 'fish', 'dog', 'ox']

// // console.log(animals[1])

// // // Old method
// // for (let i = 0; i < animals.length; i++) {
// //   console.log('the animal at this index is', i, animals[i])
// //   console.log(animals[i])
// // }

// // // New method. looping an array forEach demands one parameter, a child function. An anon function with ES6 arrow notation. element is a built in argument, changes on each loop. 1st loop lion, second loop tiger. element is a placeholder. Naming convention is for semantic purposes. Array has plural. element is the singular

// // animals.forEach((animal) => {
// //   console.log(animal)
// // })

// // OR

// // animals.forEach(animal => console.log(animal))

// // animals.filter(function(animal) {
// //   return animal.includes('o')
// // })

// // Filter - only keep animals that are less than four characters. Imutable (do not mutate original array and returns value) The Bouncer

// // Old method

// // const lessThanFour = []
// // for (let i = 0; i < animals.length; i++) {
// //   if (animals[i].length <= 3) {
// //     lessThanFour.push(animals[i])
// //   }
// // }

// // // New method

// // const lessThanFour = animals.filter((animal) => {
// //   return animal.length <= 3
// // })

// // // ES6

// // const lessThanFour = animals.filter(animal => animal.length <= 3)

// // console.log(lessThanFour)

// // MAP - always returns the same number of items in the array. The weird Bouncer

// // Change array to be an array of string lengths

// // Old Method

// // const numberArray = []
// // for (let i = 0; i < animals.length; i++) {
// //   numberArray.push(animals[i].length) 
// // }

// // console.log(numberArray)

// // //New method

// // const numberArray = animals.map(animal => {
// //   return animal.length
// // })

// // // ES6

// // const numberArray = animals.map(animal => animal.length)

// // console.log(numberArray)

// // Can combine map and filter...

// // Reduce - good for adding all the numbers in an array

// // REDUCE add all the numbers in the array

// const numbers = [1, 3, 7, 8]

// let total = 0
// for (let i = 0; i < numbers.length; i++) {
//   console.log(total)
//   total = total + numbers[i]
// }

// const total = numbers.reduce((acc, number) => {
//   if (number < 3) return acc
//   if (number % 2 === 0) return acc
//   return acc + number
// }, 0)


// console.log('i am the final', total)

// const ducks = numbers.reduce((acc, current) => {
//   acc.push('🦆'.repeat(current))
//   return acc
// }, [])

// console.log(ducks)

// // const breakfastItems = ['eggs', 'bacon', 'beans', 'toast']

// // const index = breakfastItems.indexOf('cheese')
// // console.log(index)

// // // Some

// // const animals = ['lion', 'tiger', 'owl', 'fish', 'dog', 'ox']

// // function animalsLessThanThree(animal) {
// //   return animal.length <= 3
// // }

// // const someAnimals = animals.some(animalsLessThanThree)

// // const everyAnimals = animals.every(animalsLessThanThree)

// // const filteredAnimals = animals.filter(animalsLessThanThree)

// // console.log(everyAnimals)
// // console.log(someAnimals)
// // console.log(filteredAnimals)

// console.log(animalsLessThanThree('ryan'))

characterCount = ['Stay', 'hungry', 'stay', 'foolish']

function characterCount(array) {
  // console.log(array)
  let count = array.reduce((acc, sum) => {
    return acc + sum
 }, 0)