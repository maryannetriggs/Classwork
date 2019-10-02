

// old blehhhhh
// for (let i = 0; i < animals.length; i++) {
//   console.log('the animals at this index is', i, animals[i])
// }

// modern method
// animals.forEach((animal, index) => {
//   console.log(`${animal} is at ${index}`)
// })

// FILTER - only keep animals that are less than 3 characters

// const lessThanThree = []
// for (let i = 0; i < animals.length; i++) {
//   if (animals[i].length <= 3) {
//     lessThanThree.push(animals[i])
//   }
// }

// nice new es6 way
// const lessThanThree = animals

// console.log(lessThanThree)

// MAP

// change the array, to be an array of the string lengths


// old method
// const numberArray = []
// for (let i = 0; i < animals.length; i++) {
//   numberArray.push(animals[i].length)
// }
// console.log(numberArray)

// const numberArray = animals.map(animal => animal.length)

// console.log(numberArray)

// REDUCE add all the numbers in the array

const numbers = [1, 3, 7, 8]

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

const breakfastItems = ['eggs', 'bacon', 'beans', 'toast']

const index = breakfastItems.indexOf('cheese')
console.log(index)

// Some

const animals = ['lion', 'tiger', 'owl', 'fish', 'dog', 'ox']

function animalsLessThanThree(animal) {
  return animal.length <= 3
}

const someAnimals = animals.some(animalsLessThanThree)

const everyAnimals = animals.every(animalsLessThanThree)

const filteredAnimals = animals.filter(animalsLessThanThree)

console.log(everyAnimals)
console.log(someAnimals)
console.log(filteredAnimals)

console.log(animalsLessThanThree('ryan'))








