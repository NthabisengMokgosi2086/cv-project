var express = require('express');
var app = express();
var path = require('path'); // helps create routes

var port =process.env.port || 8099;

//add routing Set static folder will point everthing to our public folder
app.use(express.static(path.join(__dirname,'collection')));

app.listen(port,() => console.log('The Server is Running on port :' + port));




var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
