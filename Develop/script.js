// Assignment Code
var generateBtn = document.querySelector("#generate");
//split will convert from strings to arrays
var lowerCaseArr = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numberArray = "0123456789".split("");
var symbolArray = "!@#$%^&*+~?=/;:`".split("");
//create empty array
var passwordArr = [];
var promptPassword;

//function to prompt user input
function genPassword() {
  //ask how many characters the password will be
  promptPassword = window.prompt("How many characters would you like your password to be? Please, choose between 8-128 characters.");
  
  //check for correct character input
  if (promptPassword > 7 && promptPassword < 129) {
    var promptLower = window.confirm(
      "Would you like to include lowercase letters?"
    );
    if (promptLower === true) {
      Array.prototype.push.apply(passwordArr, lowerCaseArr); //includes item from lowercase array
    }

    var promptUpper = window.confirm("UPPERCASE LETTERS?");
    if (promptUpper === true) {
      Array.prototype.push.apply(passwordArr, upperCaseArr); //includes item from uppercase array
    }

    var numberPrompt = window.confirm("Would you like to include numbers?");
    if (numberPrompt === true) {
      Array.prototype.push.apply(passwordArr, numberArray); //includes item from number array 
    }

    var symbolPrompt = window.confirm("Symbols?");
    if (symbolPrompt === true) {
      Array.prototype.push.apply(passwordArr, symbolArray);//includes item from symbol array 
    }

    //checks for one type by ensuring length of array is at least 1 or more
    if (passwordArr.length === 0) {
      window.alert(
        "You must choose at least one type of character between lowercase, uppercase, numbers, and symbols. Please choose at least one."
      );
    } else {
      generatePass();
    }
  } else {
    window.alert("Invalid password. Please, try again");
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