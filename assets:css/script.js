
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//--generate a password using what the user selected
function generatePassword() {
  var length;
  do {
    //  will show prompt for password length
    length = parseInt(prompt("Enter the password length (between 8 and 128 characters):"));
  } while (isNaN(length) || length < 8 ||length > 128);

  // prompt for character options
  var includeLowercase = confirm("Include lowercase letters?")
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");


  // checks selected options
  if (!(includeLowercase || includeUppercase || includeNumbers || includeSpecial)) {
    alert("Must pick at least one character type.");
    return "";
  }

  // generate the password using what was selected 
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/";

  var allChars = "";
  if (includeLowercase){
    allChars += lowercaseChars;
  }
  if (includeUppercase) {
    allChars += uppercaseChars;
  }
  if (includeNumbers) {
    allChars += numericChars;
  }
  if (includeSpecial) {
    allChars += specialChars;
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random()* allChars.length);
    password += allChars[randomIndex];
  }
  return password;
}
