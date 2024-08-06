let username = document.getElementById("username");
let useremail = document.getElementById("useremail");
let form = document.getElementById("form");

let emailFlag = 0;
let usernameFlag = 0;

form.addEventListener("submit", validateform);

function validateform(e) {
  e.preventDefault();

  if (username.value == "") {
    document.getElementById("userError").innerHTML = "User Name is empty";
    usernameFlag = 0;
  } else if (username.value.length < 3) {
    document.getElementById("userError").innerHTML = "Minimum 3 Char require";
    usernameFlag = 0;
  } else {
    document.getElementById("userError").innerHTML = "";
    usernameFlag = 1;
  }

  if (useremail.value == "") {
    document.getElementById("emailError").innerHTML = "User Email is empty";
    emailFlag = 0;
  } else if (!validateEmail(useremail.value)) {
    document.getElementById("emailError").innerHTML = "User Email is invalid";
    emailFlag = 0;
  } else {
    document.getElementById("emailError").innerHTML = "";
    emailFlag = 1;
  }

  if (emailFlag && usernameFlag) {
    alert(
      JSON.stringify({
        username: username.value,
        email: useremail.value,
      })
    );
  } else {
    return false;
  }
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
