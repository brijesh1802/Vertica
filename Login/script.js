$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

function login() {
  const usernameVal = "Username@123";
  const passcodeVal = "Password_2023";
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  if (username.value === usernameVal && password.value === passcodeVal) {
    alert("Welcome Back!!!");
    username.classList.remove("error");
    password.classList.remove("error");
    window.location.pathname = "file:///F:/Web%20Project/Index.html";
  } else {
    confirm("User Not Found!!! Please Sign Up");
    window.location.reload();
  }
}
