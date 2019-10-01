function init() {
  const doughnutList = document.querySelector('#donuts')
  const doughnutForm = document.querySelector('#new-donut')
  let doughnuts = []

  function getDoughnuts() {
    fetch('https://ga-doughnuts.herokuapp.com/doughnuts') //this is our request being made
      .then(response => response.json()) // then we cover our response to JSON (this is a fetch specific thing)
      .then(response => {
        doughnuts = response // reassigning out empty doughnuts array to be the result of our response
        // console.log(doughnuts) 
        // Doing something with this data - has to start here within the 'then' block
        displayDoughnuts() // calling a function that can now actually play with that data because we can guarantee that we have it
      }) // then we can see our response as JSON
      .catch(err => console.log(err))
  }

  function displayDoughnuts() {
    const htmlArray = doughnuts.map(doughnut => {
      return `
      <li>${doughnut.flavour} - ${doughnut.style}</li>
      `
    }) // mapping over my array of doughnut objects and 'transforming' each doughnut into a string of valid HTML, in this case Li's to populate the Ul that is already on the page
    doughnutList.innerHTML = htmlArray.join('') // joining that array into a big string to remove the commas and setting that string to be the inner HTML of the Ul elements 'doughnutList'
  }

  function createDoughnut(e) {
    e.preventDefault() // using the event object to prevent the page reloading - the default behaviour of a form in HTML
    // console.log('the page has been submitted')
    const newDoughnut = {
      flavour: doughnutForm.querySelector('#flavor').value,
      style: doughnutForm.querySelector('#style').value
    } // creating a new doughnut object to send 'POST' to the server, pulling the values out of their respective form fields when the submit button is clicked
    // console.log(newDoughnut)
    fetch('https://ga-doughnuts.herokuapp.com/doughnuts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newDoughnut)
    }) // using fetch this time to send a post request, to do this a configuration object is sent as the second argument of the request. It contains the method 'POST' (as 'GET' is the default), the headers (meta info) and the body which is the actual data being sent
      .then(response => response.json())
      .then(response => {
        doughnuts.push(response) // pushing our new doughnut into the doughnuts array at the end
        displayDoughnuts() // recalling our function to render them all to the page with the new donut
      }) // the sucessful response is our created object that we can now add to the page
      .catch(err => console.log(err))
  }

  getDoughnuts()
  doughnutForm.addEventListener('click', createDoughnut)
}


window.addEventListener('DOMContentLoaded', init) 