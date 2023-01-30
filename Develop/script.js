// Array for Special Characters
var SpecialC= ['~','!','@','#','$','%','^','&','*','(',')','-','_','+','[',']','{','}','\\','|',';',':',',','<','.','>','?','/','`','=','"'];

// Array for Numeric Characters
var NumericC= ['0','1','2','3','4','5','6','7','8','9'];

// Array for Lower Case Characters
var LowerCaseC= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array for Upper Case Characters
var UpperCaseC= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Prompt for Password Requirements
function PasswordCriteria() {
  var length = parseInt (
    prompt("How many characters would you like your password to contain"),
    10
  );
  // Has to at least be a number
  if (Number.isNaN(length)) {
    alert('Password length requires a number');
    return null;
  }
  // Less than 128 Characters, Fails otherwise
  if (length > 128) {
    alert('Password must be less than 129 characters');
    return null;
  }
  // At least 8 Characters, Fails otherwise
  if (length < 8) {
    alert('Password must be more than 7 characters');
    return null;
  }
}

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
