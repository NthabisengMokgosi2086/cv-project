var express = require('express');
var app = express();
var path = require('path'); // helps create routes

var port =process.env.port || 5500;


//add routing Set static folder will point everthing to our public folder
app.use(express.static(path.join(__dirname,'collection')));

app.listen(port,() => console.log('The Server is Running on port :' + port));



function validate(){
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "15px";
  error_message.style.fontSize= "20px";
  error_message.style.color = "red";
  error_message.style.textAlign = "center";
 
  
  var text;
  if(name.length < 3){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 5){
    text = "Please Enter Correct Subject";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 10){
    text = "Please Enter More Than 10 Characters";
    error_message.innerHTML = text;
    return false;
  }
  
    location.reload();
    alert("Email Sent!  Thanks for your Message.");
    return true;

  //if (validate() == true){
  //  document.querySelector("C-form").reset();
  //}
 
  
}
 