// Assignment code here

var genPass = function(){

  var passwordLength = window.prompt("How long would you like your password?");

  if (passwordLength > 0){
  console.log("Hello");  
  }

  else {
    window.alert("Please enter a number greater than 0.");
    genPass();
  };
}

genPass();


window. prompt("Would you like letters in your password?");


window. prompt("Would you like numbers in your password?");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
