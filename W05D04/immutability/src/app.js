// const name = 'Jack'
// let otherName = name

// otherName = 'Mia'

// console.log(name)
// console.log(otherName)

// const number = 1
// let otherNumber = number

// otherNumber = 1000000000000

// console.log(number)
// console.log(otherNumber)

// const myArray = ['Jack', 'Tal', 'Mia']
// const myOtherArray = ['Mike', ...myArray, 'Nick']
// console.log(myOtherArray === myArray)
// console.log(myArray)
// console.log(myOtherArray)


// const myObj = { name: 'Jack', hometown: 'Pompey' }
// const myOtherObj = { ...myObj, name: 'Duck', species: 'Bird' }
// console.log(myObj)
// console.log(myOtherObj)


const myBiggerObject = {
  name: 'Jack',
  socialMedia: {
    twitter: '@jack',
    facebook: 'JackMay'
  } 
}

// const myOtherBigObject = { 
//   ...myBiggerObject, 
//   socialMedia: { ...myBiggerObject.socialMedia }
// }

const myOtherBigObject = JSON.parse(JSON.stringify(myBiggerObject))

myOtherBigObject.name = 'Mia'
myOtherBigObject.socialMedia.twitter = '@Mia'
console.log(myBiggerObject)
console.log(myOtherBigObject)