var currentTab = 0;
showTab(currentTab);
var validfname = false;
var validlname = false;
var validemail = false;
var validphonenumber = false;
var validcardnumber = false;
var validcvv = false;

//! FIRSTNAME
function validatefname(firstname) {
  var errorele = document.getElementById("fnameerror");
  var regex = /([A-Z])\w/;
  if (regex.test(firstname.value)) {
    validfname = true;
    firstname.className = "valid";
    errorele.className = "noerror";
  } else {
    firstname.className = "invalid";
    errorele.className = "error";
    errorele.innerHTML = "Enter a valid First Name";
  }
}
//! LASTNAME
function validatelname(lastname) {
  var errorele = document.getElementById("lnameerror");
  var regex = /([A-z])\w/;
  if (regex.test(lastname.value)) {
    validlname = true;
    lastname.className = "valid";
    errorele.className = "noerror";
  } else {
    lastname.className = "invalid";
    errorele.className = "error";
    errorele.innerHTML = "Enter a valid Last Name";
  }
}
//! EMAIL
function validateEmail(email) {
  var errorele = document.getElementById("emailerror");
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regex.test(email.value)) {
    validemail = true;
    email.className = "valid";
    errorele.className = "noerror";
  } else {
    email.className = "invalid";
    errorele.className = "error";
    errorele.innerHTML = "Enter a valid Email Address";
  }
}
//! PHONE NUMBER
function validatePhoneNumber(phonenumber) {
  var errorele = document.getElementById("phonenumbererror");
  var regex = /^[0-9]{10}$/;
  if (regex.test(phonenumber.value)) {
    validphonenumber = true;
    phonenumber.className = "valid";
    errorele.className = "noerror";
  } else {
    phonenumber.className = "invalid";
    errorele.className = "error";
    errorele.innerHTML = "Enter a valid Phone Number";
  }
}
//! CARD NUMBER
function validateCardNumber(cardnumber) {
  var errorele = document.getElementById("cardnumbererror");
  var regex = /^[0-9]{12}$/;
  if (regex.test(cardnumber.value)) {
    validcardnumber = true;
    cardnumber.className = "valid";
    errorele.className = "noerror";
  } else {
    cardnumber.className = "invalid";
    errorele.className = "error";
    errorele.innerHTML = "Enter a valid Card Number";
  }
}
//! CVV
function validateCVV(cvv) {
  var errorele = document.getElementById("cvverror");
  var regex = /^[0-9]{3}$/;
  if (regex.test(cvv.value)) {
    validcvv = true;
    cvv.className = "valid";
    errorele.className = "noerror";
  } else {
    cvv.className = "invalid";
    errorele.className = "error";
    errorele.innerHTML = "Enter a valid Card Number";
  }
}

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  fixStepIndicator(n);
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }
  showTab(currentTab);
}

function validateForm() {
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}
