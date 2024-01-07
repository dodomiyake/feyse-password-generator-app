// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  "."
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Confirm prompts for user preferences
  var userSpecial = confirm("Include special characters");
  var userNumeric = confirm("Include numeric characters");
  var userLowerCase = confirm("Include Lowercase characters");
  var userUpperCase = confirm("Include Uppercase characters");

  // Return an object with user preferences
  return {
    userSpecial: userSpecial,
    userNumeric: userNumeric,
    userLowerCase: userLowerCase,
    userUpperCase: userUpperCase
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum];
}

// Function to generate password with user input
function generatePassword() {
  // Get user preferences for password options
  var passwordOption = getPasswordOptions();

  //Variable to store password and arrays generated
  var allChars = [];
  var password = "";

  // Combine character sets based on user preferences
  if(passwordOption.userSpecial){
    allChars = allChars.concat(specialCharacters);
  }
  if(passwordOption.userNumeric){
    allChars = allChars.concat(numericCharacters);
  }
  if(passwordOption.userLowerCase){
    allChars = allChars.concat(lowerCasedCharacters);
  }
  if(passwordOption.userUpperCase){
    allChars = allChars.concat(upperCasedCharacters);
  }

  // Check if at least one character type is selected
  if(allChars.length === 0){
    alert("Please select at least one character type.");
    return "Password generation canceled.";
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
