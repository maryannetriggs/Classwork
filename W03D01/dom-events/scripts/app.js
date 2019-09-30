window.addEventListener('load', () => {

  const obj = {
    name: 'val',
    introduce() {
      console.log(`Hi I'm ${this.name}`)
    }
  }














  const button = document.querySelector('button')
  // // console.log(button.onclick)
  // button.onclick = function(e) {
  //   // console.log('Hello World')
  //   console.log(e)
  // }

  // OR
  // const button = document.querySelector('button')
  // // console.log(button.onclick)
  // button.onclick = function() {
  //   // console.log('Hello World')
  //   console.log(window.event) - relates to last window event that just happened
  // }

  // const button = document.querySelector('button')
  // // console.log(button.onclick)
  // button.onclick = function(e) {
  //   // console.log('Hello World')
  //   // console.log(e.target.innerHTML)
  //   console.log(this.innerHTML)
  // }

  // Arrow notation doesn't work. No longer refers to the element (button for instance).

  // If I want more than one event listeners.... the second one will overwrite the others so from now on don't use .onclick.

  // button.addEventListener('click', function(e) {
  //   console.log(e.target.innerHTML)
  // })
  // button.addEventListener('click', function(e) {
  //   console.log('hello beans')
  // })

  // button.addEventListener('click', e => {
  //   console.log('hello beans')
  // }) // Only of use if you don't want to use the this.keyword

  // Other button events - dblclick, mousedown, mouseup, mouseover, mouseout, mousemove

  // const hoverDiv = document.querySelector('.hover-div')

  // let originalColour = hoverDiv.style.color
  // let originalInnerHTML = hoverDiv.innerHTML

  // hoverDiv.addEventListener('mouseover', e => {
  //   hoverDiv.style.color = 'red'
  //   hoverDiv.innerHTML = 'Hovered'
  // })

  // hoverDiv.addEventListener('mouseout', e => {
  //   hoverDiv.style.color = originalColour
  //   hoverDiv.innerHTML = originalInnerHTML
  // })

  // window.addEventListener - resize, scroll
  // Form events - 

  // const input = document.querySelector('#text-input')

  // input.addEventListener('focus', e => {
  //   console.log('focus')
  // })

  // input.addEventListener('blur', e => {
  //   console.log('blur')
  // })

  // input.addEventListener('keyup', e => {
  //   console.log(e.key)
  // })

  // Radio button - change (when radio button is clicked upon and checkboxes)

  // const submit = document.querySelector('#form')

  // submit.addEventListener('submit', e => {
  //   e.target.preventDefault() // preventing default behaviour
  //   alert('Form Submitted')
  // })

  const audio = document.querySelector('audio')
  audio.src = "http://soundbible.com/mp3/Audience_Applause-Matthiew11-1206899159.mp3"


  submitInput.addEventListener('submit', e => {
    e.preventDefault()
    audio.play()
    // alert('Form submitted')
  })









})