var validuname = false;
var validpwd = false;
var validcnfrmpwd = false;
var validanswer = false;

//! USERNAME
function validateUserName(username) {
  var errorele = document.getElementById("unameerror");
  var regex = /([A-Z])\w/;
  if (regex.test(username.value)) {
    validuname = true;
    username.className = "valid";
    errorele.className = "noerror";
  } else {
    username.className = "invalid";
    errorele.className = "error";
    errorele.innerHTML = "Enter a valid Username";
  }
}
//! PASSWORD
function validatePassword(password) {
  var errorele = document.getElementById("pwderror");
  var regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (regex.test(password.value)) {
    validpwd = true;
    password.className = "valid";
    errorele.className = "noerror";
  } else {
    password.className = "invalid";
    errorele.className = "error";
    errorele.innerHTML = "Enter a valid Password";
  }
}
//! CONFIRM PASSWORD
function validateConfirmPassword(confirmpassword) {
  var errorele = document.getElementById("cnfrmpwderror");
  var password = document.getElementById("pwd").value;
  if (confirmpassword.value === password) {
    validcnfrmpwd = true;
    confirmpassword.className = "valid";
    errorele.className = "noerror";
  } else {
    confirmpassword.className = "invalid";
    errorele.className = "error";
    errorele.innerHTML = "Confirm Password and Password do no match!";
  }
}
//! ANSWER
function validateSecurityAnswer(answer) {
  var errorele = document.getElementById("answererror");
  var regex = /([A-Z])\w/;
  if (regex.test(answer.value)) {
    validanswer = true;
    answer.className = "valid";
    errorele.className = "noerror";
  } else {
    answer.className = "invalid";
    errorele.className = "error";
    errorele.innerHTML = "Enter a valid Answer";
  }
}
//! NEXT
function next() {
  if (validuname && validanswer) {
    window.location.pathname = "/index2.html";
  } else {
    alert("Please enter valid details");
  }
}
//! CONFIRM
function recovery() {
  if (validpwd && validcnfrmpwd) {
    alert("Password Recovered Successfuly. Please Sign In to continue...");
    window.location.pathname = "./Login/index.html";
  } else {
    alert("Passwords Do Not Match!!! Please Enter Valid Passwords.");
  }
}
