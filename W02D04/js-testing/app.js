// The code we're testing
// Test driven Development - Red/Green Refactor Cycle

// Example Test - We expect this to pass the tests

function ftAndInchesToCm(feet, inches) {
 return Math.round((feet * 12 + inches) * 2.54);
}

// Showing that if you refactor your code and make a mkistake your tests will help you identify this
// function ftAndInchesToCm(feet, inches) {
//   const CONVERSION_FACTOR = 2.53
//   return Math.round((feet * 12 + inches) * CONVERSION_FACTOR)
//  }