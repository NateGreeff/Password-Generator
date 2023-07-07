// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Setting password requirements
function generatePassword() {
  var passwordLength = prompt("How long would you like your password to be? Please enter a number between 8 and 128");
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) { //Logic to check password length requirements
    if (passwordLength === null) { //Allows user to cancel if they want to
      return;
    }
    passwordLength = prompt(`"${passwordLength}" is not valid. Please enter a number between 8 and 128.`);
  }
  //Ask about character options
  var lowerCase = confirm("Do you want to use lowercase letters in your password?");
  var upperCase = confirm("Do you want to use uppercase letters in your password?");
  var numbers = confirm("Do you want to use numbers in your password?");
  var specialCharacters = confirm("Do you want to use special characters in your password?");
  //Ask again if no options are selected
  while (!lowerCase && !upperCase && !numbers && !specialCharacters) {
    alert("Please select at least one character type.");
    lowerCase = confirm("Do you want to use lowercase letters in your password?");
    upperCase = confirm("Do you want to use uppercase letters in your password?");
    numbers = confirm("Do you want to use numbers in your password?");
    specialCharacters = confirm("Do you want to use special characters in your password?");
  }

  //Arrays
  var lowerCaseArray = [
    "a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x",
    "y", "z"];
  var upperCaseArray = [
    "A", "B", "C", "D", "E", "F", "G", "H",
    "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X",
    "Y", "Z"];
  var numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialCharactersArray = ["!", "@", "#", "$", "%", "^", "&", "*"];
  var combinedCharacterArray = [];
  var randomizedCharacterArray = [];
  
  //Concatenate array characters
  if (lowerCase) {
    combinedCharacterArray = combinedCharacterArray.concat(lowerCaseArray);
  }
  if (upperCase) {
    combinedCharacterArray = combinedCharacterArray.concat(upperCaseArray);
  }
  if (numbers) {
    combinedCharacterArray = combinedCharacterArray.concat(numbersArray);
  }
  if (specialCharacters) {
    combinedCharacterArray = combinedCharacterArray.concat(specialCharactersArray);
  }

  //Randomize array characters
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * combinedCharacterArray.length);
    var randomCharacter = combinedCharacterArray[randomIndex];
    randomizedCharacterArray.push(randomCharacter)
  }

  //Join and return password
  var password = randomizedCharacterArray.join("");
  return password;
};