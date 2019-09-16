// How to use the test suite
// // Must start page setting a shortcut for chai....

const expect = window.chai.expect


// // const num = 20

// // still breaks without the consol.log (expect(num).to.equal(10))
// // console.log(expect(num).to.equal(20))

// const arr = ['Elephant', 'Giraffe', 'Helicopter']
// // expect(arr).to.include('Helicopter')
// // expect(arr).to.be.empty
// expect(arr).to.not.be.empty

// //  Oddity.. throw Error()

// const car = {
//   brand: 'Ford',
//   model: 'Focus',
//   colour: 'blue'
// }

// expect(car.brand).to.exist // Checking property exists
// // expect(car.model).to.be.null // Breaks...
// expect(car.model).to.not.be.null
// expect(car.speed).to.be.undefined // Because property doesn't exist yet

// // Best not to chain as reabability is lost

// Mocha

// describe is a function (a whole suite of tests), 1st argument should be human readable description of what the series of tests are about, followed by the 2nd argument as a function
// The 'it' tells us about the specific tests we will run.
// done is called to let Mocha know we're done

// Below will pass...

// describe('Feet and Inches to CM tests', () => {
//   it('should return a number', done => {
//     expect(5).to.be.number
//     done()
//   })
// })


describe('Feet and Inches to CM tests', () => {

  it('should return a number', done => {
    expect(ftAndInchesToCm(5, 10)).to.be.number
    done()
  })

  // Can ommit the done operator

  it('should return the correct value', () => {
    expect(ftAndInchesToCm(5, 10)).to.eq(178)
    expect(ftAndInchesToCm(4, 8)).to.eq(142)
    expect(ftAndInchesToCm(6, 2)).to.eq(188)
  })
})


describe