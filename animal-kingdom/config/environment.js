// We store values in this environment file that we use commonly elsewhere in the app. The benefit to doing that is that if we need to change/update one of them, we only need to do it in 1 place, right here, and all the places where the values are imported will be correct. If we didn't do this, and wanted to change one of these values, we would have to find all uses of these values in our project and update them all one by one, long and easily leads to mistakes and bugs
const env = process.env.NODE_ENV || 'development'
const dbURI = `mongodb://localhost/animal-kingdom-${env}` // our location string for the DB, we connect to this using `mongoose.connect` (see index.js)
const port = 4000 // the port our app runs on localhost, used in index.js
const secret = 'Shhhh it\'s a secret' // our secret used for encoing our JWT tokens, used in '/controllers/auth' and '/lib/secureRoute'

module.exports = { // exporting these out for use in our app, using the ES6 object shorthand (see '/controllers/aniamls' for more on that). As we need to export many values at once, we collect them in an object and export that object (see the curly brackets wrapping the export). This means these values can be deconstructed when importing them in other files, the opposte to this method can be seen in '/config/router', look how it is directly exported with no brackets, then imported without the need for destrucuring in 'index.js'
  dbURI, 
  port, 
  secret 
}