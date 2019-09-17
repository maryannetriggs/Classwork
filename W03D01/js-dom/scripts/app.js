// Document is a global variable

// Important not to work with the DOM before all of the scripts have loaded
// Window is a global object in js

window.addEventListener('DOMContentLoaded', () => {

  const body = document.querySelector('body')
  const heading = document.createElement('h1')

  heading.innerHTML = ('I am a heading')
  body.appendChild(heading)

  heading.style.backgroundColor = 'grey'
  heading.style.border = '2px solid green'
  heading.style.padding = '20px'

  console.log(document.querySelector('body').offsetHeight)

  const box = document.createElement('div')
  box.innerHTML = ('I am a div')
  body.appendChild(box)

  box.classList = 'box'
  box.id = 'single'

  console.log(body.children)

  box.setAttribute('data-id', '1')

  console.log(document.querySelector('div').offsetTop)


  // 1) Store the <body> element inside a const called "body".
  // 2) Create a <h1> and store it in a const called heading.
  // 3) Using innerHTML add "I am a heading" inside the tag.
  // 4) Append the heading to the body of the HTML.
  // 5) Make the <h1> grey.
  // 6) Give it a border of 2px solid green.
  // 7) Give it 20px of padding.
  // 8) Use JavaScript to find the height of the <h1> (including the padding and border) and then console log it. (You should get 81).
  // 9) Create a <div> and store it in a const called box.
  // 10) Add the string "I am a div" inside the <div>.
  // 11) Append the div to the body of the HTML.
  // 12) Give the div a class of "box".
  // 13) Give the div an id of "single".
  // 14) Console log the children of the <body>.
  // 15) Give the div a data attribute of data-id='1';
  // 16) Find the vertical offset position of the div (how far down it is from the top of the page) and console log it. (You should get 124).


  // const catElement = document.getElementById('cat')
  // console.log(catElement)

  // const giraffeClass = document.getElementsByClassName('giraffe')
  // console.log(giraffeClass)

  // const catIdElement = document.getElementById('cat')
  // // catIdElement.style.backgroundColor = 'blue'
  // // catIdElement.style.marginTop = '60px'

  // const catClassElement = document.getElementsByClassName('cat')[0]
  // catClassElement.className = 'cat-extra'
  // // Can change class names using the DOM

  // // // Can change the contents of HTML
  // // catIdElement.innerHTML = '<h1>Goodbye</h1>'

  // // // Can change content text inside elements also
  // // catIdElement.textContent = ''

  // // Takes as argument a CSS selector - great for specificity, however will only select the first child it finds...
  // const catSection = document.querySelector('#cat section')
  // // console.log(document.querySelector('#cat section'))

  // const nodeList = document.querySelectorAll('#cat section')
  // console.log(document.querySelectorAll('#cat section'))

  // // NodeList (2) is printeed to the console, can usually be worked with the same way as an array

  // nodeList.forEach(element => {
  //   element.style.backgroundColor = 'red'
  // })

  // // changing/adding/removing classes without overriding anything already there... //DOMTokenList - gives us all the classes
  // console.log(catClassElement.classList)

  // catClassElement.classList.add('adding-a-new-class')

  // const cat = document.querySelectorAll('.cat') // Will return an array with all the answers

  // // Adding a new HTML element
  // const cat = document.querySelector('.cat') // Will return an array with all the answers
  // const newElement = document.createElement('h1')
  // newElement.innerHTML = ('just been added')
  // cat.appendChild(newElement)

})


