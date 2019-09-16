/* global describe, it */
/* eslint-disable no-undef */

const chai  = window.chai
const expect = chai.expect

// write your tests here...

// A function which takes a number and returns 'Fizz' if the number is divisable by 3, 'Buzz' if the number is divisable by 5, 'Fizzbuzz' divisable by both and the number is not divisable by 3 or 5

describe('Testing our Fizzbuzz function', () => {

  it('should return a number', () => {
    expect(fizzbuzz(1)).to.be.a('number')
  })

  it('should fizz if divisible only by 3', () => {
    expect(fizzbuzz(3)).to.equal('fizz')
    expect(fizzbuzz(6)).to.equal('fizz')
    expect(fizzbuzz(9)).to.equal('fizz')
    expect(fizzbuzz(12)).to.equal('fizz')
  })

  it('should buzz if divisible only by 5', () => {
    expect(fizzbuzz(5)).to.equal('buzz')
    expect(fizzbuzz(10)).to.equal('buzz')
    expect(fizzbuzz(20)).to.equal('buzz')
    expect(fizzbuzz(25)).to.equal('buzz')
  })

  it('should fizzbuzz if divisible by both 3 and 5', () => {
    expect(fizzbuzz(15)).to.equal('fizzbuzz')
    expect(fizzbuzz(30)).to.equal('fizzbuzz')
    expect(fizzbuzz(45)).to.equal('fizzbuzz')
    expect(fizzbuzz(60)).to.equal('fizzbuzz')
  })

})


// A function which takes an array of numbers and returns the index of the highest value

describe('Testing our highest index function', () => {

  // it('should take an array as an parameter', () => {
  //   expect((arr).to.be.an.array)
  // })

  it('should return a number', () => {
    expect(highestIndex([])).to.be.a('number')
  })

  it('return', () => {
    expect(highestIndex([])).to.be.a('number')

})

// Calculate the Price of an ice-cream. A function which takes either one or two numbers, the first number being the number of scoops. The second being the number of flakes. Scoops cost 1.20. Flakes cost 0.55. The function returns the the price of the ice-cream.

describe('Testing our ice cream price function', () => {

  it('should return a number', () => {
    expect(iceCreamPrice()).to.be.a('number')
  })

})

// Tax Calculator - Write a function that takes two arguments, an amount in pounds (£) and a tax percentage (as a decimal (0.2) or a whole number (20) both being 20%). Return a string 'Your tax is Xp'.

describe('Testing our tax calculator function', () => {

  it('should return a string', () => {
    expect(taxCalc()).to.be.a('string')
  })

})
