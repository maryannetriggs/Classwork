// // // A factory for Objects - Naming convention starts with a capital letter.

// // // Object example

// // const ducky = {
// //   name: 'ducky'
// //   sound: 'quack'
// // }

// // // describes definition of duck (object) and how we should make them, like a blueprint. New is a keyword. We can also gice classes Methods other than constructor.

// // class Duck {
// //   constructor(name, sound) {
// //     console.log(name, ' ' , sound)
// //     this.name = name
// //     this.sound = sound
// //   }
// //   speak() {
// //     console.log(`I like to say ${this.sound}`)
// //     console.log(this.constructor) // gets name of class - Duck
// //   }
// // }

// // const ducky = new Duck('ducky', 'quack')
// // const scroogeMcDuck = new Duck('Scrooge', 'I\m a wealthy duck')
// // console.log(ducky)
// // console.log(scroogeMcDuck)

// // scroogeMcDuck.speak()

// // // I could do this...

// // class Dog {
// //   constructor(name, sound) {
// //     this.name = name
// //     this.sound = sound
// //   }
// //   speak() {
// //     console.log(`I like to say ${this.sound}`)
// //   }
// //   fetch() {
// //     console.log('I\'m going to fetch the ball')
// //   }
// // }

// // const doggy = new Dog('Pluto', 'woof')
// // console.log(doggy)

// // Or I could do this...

// class Animal {
//   constructor(name, sound) {
//     this.name = name
//     this.sound = sound
//   }
//   speak() {
//     console.log(`I like to say ${this.sound}`)
//   }
// }

// class Duck extends Animal {

// }

// class Dog extends Animal {
//   fetch() {
//     console.log('I\'m going to fetch the ball')
// }


// const ducky = new Duck('ducky', 'quack')
// console.log(ducky)

// const doggy = new Dog('Pluto', 'woof')
// console.log(doggy)
