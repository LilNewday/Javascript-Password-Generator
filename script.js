// Array for Special Characters
const SpecialC= ['~','!','@','#','$','%','^','&','*','(',')','-','_','+','[',']','{','}','\\','|',';',':',',','<','.','>','?','/','`','=','"'];

// Array for Numeric Characters
const NumericC= ['0','1','2','3','4','5','6','7','8','9'];

// Array for Lower Case Characters
const LowerCaseC= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array for Upper Case Characters
const UpperCaseC= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Prompt for Password Requirements
function PasswordCriteria() {
  var length = parseInt (
    prompt("How many characters would you like your password to contain"),
    10
  );
  // Has to at least be a number
  if (!Number.isInteger(length)) {
    alert('Password length requires a number');
    return null;
  }
  // At least 8 characters and less than 128 Characters, Fails otherwise
  if (length < 8 || length > 128) {
    alert('Password must be more than 7 characters and less than 129 characters');
    return null;
  }

// Confirm inclusion of Special Characters
  const confirmSpecial = confirm('Click OK to confirm special characters');
// Confirm inclusion of Numeric Characters
  const confirmNumbers = confirm('Click OK to confirm numeric characters');
// Confirm inclusion of Lowercased Characters
  const confirmLowercased = confirm('Click OK to confirm lowercased characters');
// Confirm inclusion of Uppercased Characters
  const confirmUppercased = confirm('Click OK to confirm uppercased characters');

// Checks to make sure at least one Character was selected
  if (
    confirmSpecial === false &&
    confirmNumbers === false &&
    confirmLowercased === false &&
    confirmUppercased === false
  ) {
    alert('You are required to select at least one character type');
    return null;
  }
//Stores user input
  var Choice = {
    length: length,
    confirmSpecial: confirmSpecial,
    confirmNumbers: confirmNumbers,
    confirmLowercased: confirmLowercased,
    confirmUppercased: confirmUppercased,
  };

  return Choice;
}
// Is the random function that allows the password to be random
function Random(array) {
  var RandomIndex = Math.floor(Math.random() * array.length);
  var RandomElement = array[RandomIndex];

  return RandomElement;
}
// Allows the Password to generate
function generatePassword() {
  var options = PasswordCriteria();
  var result = [];
  // Stores the potential types of characters used
  var possiblecharacters = [];
  // Are the guaranteed characters being used
  var guaranteedcharacters = [];
    
  if (!options) return null;
  
  if (options.confirmSpecial) {
    possiblecharacters = possiblecharacters.concat(SpecialC);
    guaranteedcharacters.push(Random(SpecialC));
  }
  
  if (options.confirmNumbers) {
    possiblecharacters = possiblecharacters.concat(NumericC);
    guaranteedcharacters.push(Random(NumericC));
  }
  
  if (options.confirmLowercased) {
    possiblecharacters = possiblecharacters.concat(LowerCaseC);
    guaranteedcharacters.push(Random(LowerCaseC));
  }
  
  if (options.confirmUppercased) {
    possiblecharacters = possiblecharacters.concat(UpperCaseC);
    guaranteedcharacters.push(Random(UpperCaseC));
  }

  for (var i = 0; i < options.length; i++) {
    var possiblecharacters = Random(possiblecharacters);
    result.push(possiblecharacters);
  }
  
  for (var i = 0; i < guaranteedcharacters.length; i++) {
    result [i] = guaranteedcharacters[i];
  }
  
  return result.join('');
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
