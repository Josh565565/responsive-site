document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();

  checkData();
});

var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var email = document.getElementById("email");
var password = document.getElementById("password");

function checkData() {
  var firstnameValue = firstname.value.trim();
  var lastnameValue = lastname.value.trim();
  var emailValue = email.value.trim();
  var passwordValue = password.value.trim();

  if (firstnameValue == "") {
    setError(firstname, "First Name cannot be empty");
  } else {
    setSuccess(firstname);
  }

  if (lastnameValue == "") {
    setError(lastname, "Last Name cannot be empty");
  } else {
    setSuccess(lastname);
  }

  if (emailValue == "") {
    setError(email, "Email cannot be empty");
  } else if (!isEmail(emailValue)) {
    setError(email, "Looks like this is not an email");
  } else {
    setSuccess(email);
  }

  if (passwordValue == "") {
    setError(password, "Password cannot be empty");
  } else {
    setSuccess(password);
  }
}

function setError(u, msg) {
  var parentBox = u.parentElement;
  parentBox.className = "form-control error";
  var span = parentBox.querySelector("span");
  var fa = parentBox.querySelector(".fa");
  span.innerText = msg;
  fa.className = "fa fa-exclamation-circle";
}

function setSuccess(u) {
  var parentBox = u.parentElement;
  parentBox.className = "form-control success";
  var fa = parentBox.querySelector(".fa");
  fa.className = "fa fa-check-circle";
}

function isEmail(e) {
  var reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(e);
}
