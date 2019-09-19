// const currentDate = new Date() //Inbuilt js object
// // console.log(currentDate) 

// // console.log(currentDate.getHours())
// // console.log(currentDate.getMinutes())
// // console.log(currentDate.getSeconds())

// // Time/Date returned is the time the date object was called at - when stored within a variable the date wont change, it will be the date it was called into the variable

// console.log('The day of the week is:', currentDate.getDay()) // prints 3 because it's a Wednesday and that's the third day of the week
// console.log('The current month is:',currentDate.getMonth()) // prints 8, because months start at zero
// console.log('The year is:',currentDate.getFullYear())

// // Timeouts and timed events

// // global function for timed events. Need to say what we want to do, followed by time in miliseconds
// // Only does it once...

// // setTimeout(() => {
// //   alert('Hello')
// // }, 5000)

// // To do it more than once...

// // setInterval(() => {
// //   console.log('Hello')
// // }, 2000)

// // How to stop an interval

// const timerId = setInterval(() => {
//   console.log('Hello')
// }, 2000)

// setTimeout(() => {
//   clearInterval(timerId)
// }, 7000)

// let saidHellAlready = false

// const timerId = setInterval(() => {
//   if (saidHellAlready) {
//     console.log('I didnt really mean that')
//   } else {
//     console.log('HELL ALREADY')
//     saidHellAlready = true
//   }
// }, 2000)

// const timerId = setInterval(() => {
//   const currentTime = new Date()
//   console.log(currentTime.getSeconds())
// }, 2000)

// setTimeout(() => {
//   clearInterval(timerId)
// }, 7000)

window.addEventListener('DOMContentLoaded', () => {

  // const screen = document.querySelectorAll('#watch .screen') - another way of using query selector

  const screen = document.querySelectorAll('.screen')
  const start = document.querySelector('#start')
  const reset = document.querySelector('#reset')
  const timer = document.querySelector('#timer')
  let countdown = 10

  setInterval(() => {
    const currentTime = new Date()
    screen[0].innerHTML = currentTime.toLocaleTimeString()
  }, 1000)


  start.addEventListener(('click'), () => {
  
    const countingDown = setInterval(() => {
      countdown--
      screen[1].innerHTML = countdown
      if (countdown === 0) {
        timer.classList.add('ringing')
      }
    }, 1000)

    setTimeout(() => {
      clearInterval(countingDown)
    }, 10000)
  
  })

  // reset.addEventListener(('click'), () => {
  //   location.reload()
  // })

  // // Nick's Solution
  // reset.addEventListener(('click'), () => {
  //   timer.classList.remove('ringing')
  //   countdown = 10
  //   screen[1].innerHTML = screen[1]
  //   clearInterval()
  // })
  



})