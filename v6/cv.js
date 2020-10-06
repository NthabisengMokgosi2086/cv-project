var express = require('express');
var app = express();
var path = require('path'); // helps create routes
const credentials = require('/.apiC.json')
var port =process.env.port || 5500;

const { summary, precipProbability, temperature, windSpeed, windBearing } = response.body.currently;
//intergrating dark sky n server
app.get('/weather', (req, res) => {

});
const { lat, lon } = req.query;

 let request = unirest("GET", `https://${credentials.host}/${lat},${lon}`);

 request.query({
   lang: "en",
   units: "auto"
 });

 request.headers({
   "x-rapidapi-host": credentials.host,
   "x-rapidapi-key": credentials.apiKey
 });

 request.end(response => {
   if (response.error) res.status(500).end(); // Send an error code to the client if there's an error
   const {
     summary,
     precipProbability,
     temperature,
     windSpeed,
     windBearing
   } = response.body.currently; // Pull out everything we need from the response

   res.status(200).send(
     JSON.stringify({
       summary: summary,
       chanceOfRain: precipProbability,
       temp: temperature,
       wind: {
         speed: windSpeed,
         bearing: windBearing
       }
     })
   );
 });

//add routing Set static folder will point everthing to our public folder
app.use(express.static(path.join(__dirname,'collection')));

app.listen(port,() => console.log('The Server is Running on port :' + port));



var fields={};
document.addEventListener("DOMContentLoaded", function(){
 
  fields.firstName = document.getElementById('firstName');
  fields.lastName = document.getElementById('lastName');
  fields.email = document.getElementById('email');
  fields.phone = document.getElementById('phone');
  fields.comment = document.getElementById('comment');
});

//Check that the field is not empty
function isNotEmpty(value){
  if (value == null || typeof value == 'undefined') return false;

  return(value.length > 0);
}

///checking if a field value is a number
function isNumber(num){
  return (num.length > 0) && !isNaN(num);
}
//checks if the email is valid 
function isEmail(email){
 // let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    

  return regex.test(String(email).toLowerCase());
}
//Field validation function
function fieldValidation(field, validationFunction) {
  if (field == null) return false;
 
  let isFieldValid = validationFunction(field.value)
  if (!isFieldValid) {
  field.className = 'placeholderRed';
  } else {
  field.className = '';
  }
 
  return isFieldValid;
 }
 //isvalid function Check everything cobined
 function isValid() {
  var valid = true;
  
  valid &= fieldValidation(fields.firstName, isNotEmpty);
  valid &= fieldValidation(fields.lastName, isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);
  valid &= fieldValidation(fields.phone, isNumber);
  valid &= fieldValidation(fields.comment, isNotEmpty);
  
 
  return valid;
 }
 //use class constructor
 class User {
  constructor(firstName, lastName, email,phone, comment) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.phone = phone;
  this.comment= comment;
  }
 }
 
 