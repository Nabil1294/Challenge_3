// Assignment Code
var generateBtn = document.querySelector("#generate");
// Array of special characters to be included in password
var specialCharacters = ["@","!","#","$","%","^","&","*","(",")","_","-","=","+","/","?","|","~"];
// Array of numeric characters to be included in password
var numericCharacters = ["0","1","2","3","4","5","6","7","8","9"];
// Array of lowerCase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

//function to generate password
function generatePassword() {
  // to obtain password length
  var length = parseInt(
    prompt("Enter the desired password length.")
  );
// condition to check if password met all criteria
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password in numbers." + "\n" + "Password length must be more than 8 characters. " + "\n" + "Password length must be less than 128 characters.");
    return null;
  }
// confirm box with a var to store user's input of selecting special char
var hasSpecialCharacters = confirm("Click OK to confirm including special characters.");
// confirm box with a var to store user's input of selecting numeric char
var hasNumericCharacters = confirm("Click OK to confirm including numeric characters.");
// confirm box with a var to store user's input of selecting lowerCase char
var hasLowercaseCharacters = confirm("Click OK to confirm including lowercase characters.");
// confirm box with a var to store user's input of selecting UpperCase char
var hasUppercaseCharacters = confirm("Click OK to confirm including uppercase characters.");
// condition to check if non of the characters were chosen
if (!hasSpecialCharacters && !hasLowercaseCharacters && !hasNumericCharacters && !hasUppercaseCharacters ) {
  alert("Password must include at least one character type.");
  return null;
}
// create variable of password string
  var password = "";
  //create new array to store user input
  var newarray = [];
  // conditions to select which elements user selected
  if (hasLowercaseCharacters === true) {
    newarray = newarray.concat(lowerCasedCharacters);
  }
  if (hasSpecialCharacters === true) {
    newarray = newarray.concat(specialCharacters);
  }
  if (hasNumericCharacters === true) {
    newarray = newarray.concat(numericCharacters);
  }
  if (hasUppercaseCharacters === true) {
    newarray = newarray.concat(upperCasedCharacters);
  }
  // loop to generate random elements from selected arrays
  for (let i = 0; i < length; i++) {
    var randIndex = Math.floor(Math.random() * newarray.length);
    var randElement = newarray[randIndex];
    //concatenating random elements into password  
    password += randElement;
  }
  return password;
}
// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



















































