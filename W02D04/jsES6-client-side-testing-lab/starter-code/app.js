/* eslint-disable no-unused-vars */

// write your functions here...

// FIZZBUZZ

function fizzbuzz (num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz'
  } else if (num % 3 === 0) {
    return 'fizz'
  } else if (num % 5 === 0) {
    return 'buzz'
  } else
    return num
}

// HIGHEST INDEX

function highestIndex (arr) {
  return arr.indexOf(Math.max(...arr))
}


// ICE CREAM PRICE

function iceCreamPrice (scoops, flakes) {
  const scoop = 1.2
  const flake = 0.55
  return (scoops * scoop) + (flakes * flake)
}

console.log(iceCreamPrice(2, 2))

// TAX CALCULATOR

function taxCalc (pounds, tax) {
  if (tax >= 1) {
    tax = tax / 100
  }
  return `Your tax is £${parseFloat(pounds * tax)}`
}

console.log(taxCalc(10, 20))