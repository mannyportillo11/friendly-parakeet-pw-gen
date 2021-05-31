// Assignment Code
var generateBtn = document.querySelector("#generate");
//split will convert from strings to arrays
var lowerCaseArr = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numberArray = "0123456789".split("");
var symbolArray = "!@#$%^&*+~?=/;:`".split("");
var passwordArr = [];
var promptPassword;

//function to prompt user input
function genPassword() {
  //ask how many characters the password will be
  promptPassword = window.prompt("How many characters would you like your password to be? Please, choose between 8-128 characters.");
  
  //check for correct character input
  if (promptPassword > 7 && promptPassword < 129) {
    var lowerCasePrompt = window.confirm(
      "Would you like to include lowercase letters?"
    );
    if (lowerCasePrompt === true) {
      Array.prototype.push.apply(passwordArr, lowerCaseArr);
    }

    var upperCasePrompt = window.confirm("How about UPPERCASE LETTERS?");
    if (upperCasePrompt === true) {
      Array.prototype.push.apply(passwordArr, upperCaseArr);
    }

    var numberPrompt = window.confirm("Do you want numbers included?");
    if (numberPrompt === true) {
      Array.prototype.push.apply(passwordArr, numberArray);
    }

    var symbolPrompt = window.confirm("Maybe throw in some Symbol$?");
    if (symbolPrompt === true) {
      Array.prototype.push.apply(passwordArr, symbolArray);
    }

    //check to make sure at least one type of characters is chosen
    if (passwordArr.length === 0) {
      window.alert(
        "You must choose at least one type of character between lowercase, uppercase, numbers, and symbols. Please choose at least one."
      );
    } else {
      generatePass();
    }
  } else {
    window.alert("Invalid password try again");
    genPassword();
  }
}
//function to generate random items for password
function generatePass() {
  var randomPass = [];
  for (let i = 0; i < promptPassword; i++) {
    var randomNum = Math.floor(Math.random() * passwordArr.length);
    var randomChar = passwordArr[randomNum];
    randomPass.push(randomChar);
  }
  var passwordText = document.querySelector("#password");
  passwordText.innerHTML = "Your new password is " + randomPass.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", genPassword);