function login() {
    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("log").style.backgroundColor="#fc5656";
    document.getElementById("sign").style.backgroundColor="gray";
}
function signup() {
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "block";
    document.getElementById("sign").style.backgroundColor="#fc5656";
    document.getElementById("log").style.backgroundColor="gray"
}
function transform1(){
  document.getElementById("label1").style.transform = "translate(1px,50px)";
  document.getElementById("label1").style.fontSize = "14px";
    var x = document.getElementsByClassName("ast");
    x[0].style.display = "none";
}
function transform2() {
  document.getElementById("label2").style.transform = "translate(1px,50px)";
  document.getElementById("label2").style.fontSize = "14px";
    var x = document.getElementsByClassName("ast");
    x[1].style.display = "none";
}
function transform3(){
  document.getElementById("label3").style.transform = "translate(1px,50px)";
  document.getElementById("label3").style.fontSize = "14px";
    var x = document.getElementsByClassName("ast");
    x[2].style.display = "none";
}
function transform4() {
  document.getElementById("label4").style.transform = "translate(1px,50px)";
  document.getElementById("label4").style.fontSize = "14px";
    var x = document.getElementsByClassName("ast");
    x[3].style.display = "none";
}
function transform5(){
  document.getElementById("label5").style.transform = "translate(1px,50px)";
  document.getElementById("label5").style.fontSize = "14px";
    var x = document.getElementsByClassName("ast");
    x[4].style.display = "none";
}
function transform6() {
  document.getElementById("label6").style.transform = "translate(1px,50px)";
  document.getElementById("label6").style.fontSize = "14px";
    var x = document.getElementsByClassName("ast");
    x[5].style.display = "none";
}

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCLW9G2hPu3XW4KNcxq0f056OuVhNSY3iM",
//   authDomain: "rent-it-666b2.firebaseapp.com",
//   projectId: "rent-it-666b2",
//   storageBucket: "rent-it-666b2.appspot.com",
//   messagingSenderId: "849418618017",
//   appId: "1:849418618017:web:f3caa8bf14a6b2affb5ce0",
//   measurementId: "G-4P06WYGTR6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // Set up our register function
// function register () {
//   // Get all our input fields
//   email = document.getElementById('label3').value
//   password = document.getElementById('label4').value
//   first_name = document.getElementById('label1').value
//   last_name = document.getElementById('label2').value
//   // milk_before_cereal = document.getElementById('milk_before_cereal').value

//   // Validate input fields
//   if (validate_email(email) == false || validate_password(password) == false) {
//     alert('Email or Password is Outta Line!!')
//     return
//     // Don't continue running the code
//   }
//   if (validate_field(first_name) == false || validate_field(last_name) == false) {
//     alert('One or More Extra Fields is Outta Line!!')
//     return
//   }
 
//   // Move on with Auth
//   auth.createUserWithEmailAndPassword(email, password)
//   .then(function() {
//     // Declare user variable
//     var user = auth.currentUser

//     // Add this user to Firebase Database
//     var database_ref = database.ref()

//     // Create User data
//     var user_data = {
//       email : email,
//       first_name : first_name,
//       last_name : last_name,
//       // milk_before_cereal : milk_before_cereal,
//       password : password,
//       last_login : Date.now()
//     }

//     // Push to Firebase Database
//     database_ref.child('users/' + user.uid).set(user_data)

//     // DOne
//     alert('User Created!!')
//   })
//   .catch(function(error) {
//     // Firebase will use this to alert of its errors
//     var error_code = error.code
//     var error_message = error.message

//     alert(error_message)
//   })
// }

// // Set up our login function
// function login () {
//   // Get all our input fields
//   email = document.getElementById('label3').value
//   password = document.getElementById('label4').value

//   // Validate input fields
//   if (validate_email(email) == false || validate_password(password) == false) {
//     alert('Email or Password is Outta Line!!')
//     return
//     // Don't continue running the code
//   }

//   auth.signInWithEmailAndPassword(email, password)
//   .then(function() {
//     // Declare user variable
//     var user = auth.currentUser

//     // Add this user to Firebase Database
//     var database_ref = database.ref()

//     // Create User data
//     var user_data = {
//       last_login : Date.now()
//     }

//     // Push to Firebase Database
//     database_ref.child('users/' + user.uid).update(user_data)

//     // DOne
//     alert('User Logged In!!')

//   })
//   .catch(function(error) {
//     // Firebase will use this to alert of its errors
//     var error_code = error.code
//     var error_message = error.message

//     alert(error_message)
//   })
// }




// // Validate Functions
// function validate_email(email) {
//   expression = /^[^@]+@\w+(\.\w+)+\w$/
//   if (expression.test(email) == true) {
//     // Email is good
//     return true
//   } else {
//     // Email is not good
//     return false
//   }
// }

// function validate_password(password) {
//   // Firebase only accepts lengths greater than 6
//   if (password < 6) {
//     return false
//   } else {
//     return true
//   }
// }

// function validate_field(field) {
//   if (field == null) {
//     return false
//   }

//   if (field.length <= 0) {
//     return false
//   } else {
//     return true
//   }
// }

function cake() 
{
  alert("welcome! you are sign up.")
  window.l
}
function pie() {
  window.location.href = "home.html";
}