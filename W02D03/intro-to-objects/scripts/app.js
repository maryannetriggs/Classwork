// // Objects


// // Creating an object, adding key:value pairs and also changing them.


// // const myObject = {}

// const myObject = {
//   name: 'Mary-Anne',
//   eyeColour: 'brown',
//   age: 32
// }

// myObject.height = 161
// myObject.homeTown = 'Portsmouth'

// // An odd things about naming and variable conventions and getting a value out of the object. Works because expressions evaluate from right to left.
// const name = 'name'
// console.log(myObject[name])

// // console.log(myObject.name.charAt(0))
// // console.log(typeof myObject.name)

// // Changing a key's value


// myObject.name = 'Floyd'
// console.log(myObject.name)
// // Same as...
// console.log(myObject['name'])

// // Just quickly checking the status
// console.log(myObject)

// // Deleting a key:value pair

// delete myObject.age
// console.log(myObject)

// // Methods
// // There is a ES6 naming convention Nick is Slacking out....

// const matObject = {
//   name: 'Mary-Anne',
//   eyeColour: 'brown',
//   age: 32,
//   sayHello: function () {
//     console.log('Hello')
//   }
// }

// // To call function within object... a type of method
// console.log(matObject.sayHello())


// // This

// const classroom = {
//   name: 'SEI-43',
//   campus: 'London',
//   starteDate: '02/09/2019',
//   sayHi() {
//     const info = `Hello from ${this.name}, we're based in the ${this.campus}`
//     console.log(this.name)
//   }
// }

// classroom.sayHi()

// const classroom = {
//   name: 'SEI-43',
//   campus: 'London',
//   start: '2/9/2019',
//   sayHello() {
//     const info = `Hello from ${this.name}, we're based in ${this.campus}`
//     console.log(info)
//   }
// }

// classroom.sayHello()

// Create a monkey object, which has the following properties:
//  * name (String)
//  * species (String)
//  * foodsEaten (Array)
// And the following methods:
//     * eatSomething(thingAsString)which adds a new item into the monkey'sfoodsEatenarray.
//     * introduce: returns a string introducing itself, including its name, species, and what it's eaten.
// # 

// Repeat the task to make three more monkeys

// const monkey1 = {
//   name: 'Lindsay', 
//   species: 'Emperor Tamarin', 
//   foodEaten: ['banana', 'peanuts', 'sunflower seeds'],
//   eatSomething(newFood) {
//     this.foodEaten.push(newFood)
//   },
//   introduce() {
//     return `Hi, I'm ${this.name}, a ${this.species} monkey. Today I've eaten ${this.foodEaten[1]}, ${this.foodEaten[2]} and ${this.foodEaten[3]}.`
//   }
// }

// const monkey2 = {
//   name: 'Tarquin', 
//   species: 'Yellow-Tailed Wooly Monkey', 
//   foodEaten: ['emeralds', 'diamonds', 'saphires'],
//   eatSomething(newFood) {
//     this.foodEaten.push(newFood)
//   },
//   introduce() {
//     return `Hi, I'm ${this.name}, a ${this.species} monkey. Today I've eaten ${this.foodEaten[1]}, ${this.foodEaten[2]} and ${this.foodEaten[3]}.`
//   }
// }

// const monkey3 = {
//   name: 'Ellen', 
//   species: 'Balk Uakari', 
//   foodEaten: ['baubles', 'glitter', 'santa'],
//   eatSomething(newFood) {
//     this.foodEaten.push(newFood)
//   },
//   introduce() {
//     return `Hi, I'm ${this.name}, a ${this.species} monkey. Today I've eaten ${this.foodEaten[1]}, ${this.foodEaten[2]} and ${this.foodEaten[3]}.`
//   }
// }

// const monkey4 = {
//   name: 'Peter', 
//   species: 'Hamadrys Baboon', 
//   foodEaten: ['cotton', 'velvet', 'silk'],
//   eatSomething(newFood) {
//     this.foodEaten.push(newFood)
//   },
//   introduce() {
//     return `Hi, I'm ${this.name}, a ${this.species} monkey. Today I've eaten ${this.foodEaten[1]}, ${this.foodEaten[2]} and ${this.foodEaten[3]}.`
//   }
// }

// console.log(monkey1.foodEaten)

// monkey1.eatSomething('cheese')
// console.log(monkey1.foodEaten)

// console.log(monkey1.introduce(), monkey2.introduce(), monkey3.introduce(), monkey4.introduce())

const myDuck = {
  name: 'Donald',
  sound: 'quack'
}