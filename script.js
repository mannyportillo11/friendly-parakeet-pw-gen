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
  
    //check for correct character length input
    if (promptPassword > 7 && promptPassword < 129) {
      
      var promptLower = window.confirm("Would you like to include lowercase letters?");
        //check for confirmation to include lowercase letters
        if (promptLower) {
          Array.prototype.push.apply(passwordArr, lowerCaseArr); //includes item from lowercase array
        }
      
      var promptUpper = window.confirm("UPPERCASE LETTERS?");
        //check for confirmation to include uppercase letters
        if (promptUpper) {
          Array.prototype.push.apply(passwordArr, upperCaseArr); //includes item from uppercase array
        }

      var promptNumber = window.confirm("Would you like to include numbers?");
        //check for confirmation to include numbers
        if (promptNumber) {
          Array.prototype.push.apply(passwordArr, numberArray); //includes item from number array 
        }

      var promptSymbol = window.confirm("Symbols?");
        //check for confirmation to include symbols
        if (promptSymbol) {
          Array.prototype.push.apply(passwordArr, symbolArray);//includes item from symbol array 
        }

      //if no types of characters are chosen, generate error message
      if (passwordArr.length === 0) {
        window.alert("You must choose at least one type of character between lowercase, uppercase, numbers, and symbols. Please choose at least one.");
      }
      //at least one type is chosen run function
      else {
        generatePass();
      }

    }
    //incorrect length inputted, generate error message
    else {
      window.alert("Invalid password. Please, try again");
      //give user another chance to enter
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