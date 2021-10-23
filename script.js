function generate() {
  var chars = "";
  var passlength;
  var password = "";
  var alert = document.getElementById("alert");
  var min = document.getElementById("min");
  var max = document.getElementById("max");
  var number = document.getElementById("number");
  var esp = document.getElementById("esp");

  if (min.checked == true) {
    chars = chars + "abcdefghijklmnopqrstuvwxyz";
  }
  if (max.checked == true) {
    chars = chars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (number.checked == true) {
    chars = chars + "1234567890";
  }
  if (esp.checked == true) {
    chars = chars + "@%+/'!#$^?:.)(}{][~-_'";
  }

  console.log(chars);

  passlength = document.getElementById("password-length").value;

  for (var i = 0; i < passlength; i++) {
    var randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }
  document.getElementById("password").value = password;

  //check if any type of character is selected
  if (min.checked == false && max.checked == false && number.checked == false && esp.checked == false) {
    alert.innerHTML = "Please select at least one character type";
  } else {
    alert.innerHTML = "";
  }

  if (password.length > 16) {
    alert.innerHTML = "Are you out of your mind?";
    alert.style.color = "red";
  }

  else if (password.length <= 16 && password.length >= 8) {
    alert.innerHTML = "That's a good password";
    alert.style.color = "blue";
  }

  else if (password.length < 8) {
    alert.innerHTML = "Afraid of forgetting longer passwords?";
    alert.style.color = "orange";
  }
  else {
    alert.innerHTML = "Choose character types";
  }

  if (number.checked == true && esp.checked == true && password.length >= 18) {
    alert.innerHTML = "If you remember this, you are a machine *_*";
    alert.style.color = "purple";
  }
}

function copyText() {
  let copyTxt = document.getElementById("password");

  copyTxt.select();
  copyTxt.setSelectionRange(0, 99999);

  document.execCommand("copy");

  if (copyTxt.value != "") {
    alert("Text Copied: " + copyTxt.value);
  }
}

function updateTextInput(value) {
  document.getElementById("password-length").value = value;
}

