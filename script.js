// Assignment Code
var generateBtn = document.querySelector("#generate")

function generatePassword() {
  var lengthString = prompt("Enter the length of characters", "8-128")
  // Catching if cancel is selected
  if (lengthString == null) { return ("Your Secure Password") }
  // Restricting the inputs between 8 and 128
  else if (lengthString < 8) {
    alert("You must enter a number 8 or greater")
    generatePassword()
  } else if (lengthString > 128) {
    alert("You must enter a number 128 or smaller")
    generatePassword()
  }
  if (isNaN(lengthString)) {
    alert("You must enter number!")
    generatePassword()
  }


  var length = parseInt(lengthString)

  var lowerCase = confirm("Do you want to include lowercase letters?")
  var upperCase = confirm("Do you want to include uppercase letters?")
  var numeric = confirm("Do you want to include numbers?")
  var special = confirm("Do you want to include special characters?")

  var characters
  var charLower = "abcdefghijklmnopqrstuvwxyz"
  var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var charNum = "0123456789"
  var charSpecial = "<>?/!@#$%^&*()=+"

  // Add characters together in order for randomly pick for creating password
  if (lowerCase == true) { characters = characters + charLower }
  if (upperCase == true) { characters = characters + charUpper }
  if (numeric == true) { characters = characters + charNum }
  if (special == true) { characters = characters + charSpecial }

  // Reseting if no categories were selected
  if (characters == undefined) {
    alert("You need to select at least one catagory")
    generatePassword()
  }

  // initialize looping variables
  // var loop1 = 0
  // var loop2 = 0
  // var loop3 = 0
  // var loop4 = 0
  var loop = 0
  while (loop < 4) {
    var loop1 = 0
    var loop2 = 0
    var loop3 = 0
    var loop4 = 0

    for (var i = 1; i <= length; i++) {
      // Randomly picking charactor to include in password
      var randomNum = Math.floor(Math.random() * characters.length)
      //Need something in password for the first time through
      if (i == 1) {
        var password = characters.slice(randomNum, randomNum + 1)
      } else {
        var password = password + characters.slice(randomNum, randomNum + 1)
      }
    }

    // making sure at least one of the selected categories is included in the password
    var lC = /[a-z]/
    var resultLC = lC.test(password)
    if (lowerCase == true && resultLC == true || lowerCase == false) {
      loop1 = 1
    }

    var uC = /[A-Z]/
    var resultUC = uC.test(password)
    if (upperCase == true && resultUC == true || upperCase == false) {
      loop2 = 1
    }

    var num = /[0-9]/
    var resultNum = num.test(password)
    if (numeric == true && resultNum == true || numeric == false) {
      loop3 = 1
    }

    var spec = /\W/
    var resultSpec = spec.test(password)
    if (special == true && resultSpec == true || special == false) {
      loop4 = 1
    }
    loop = loop1 +loop2 + loop3 + loop4
  }
  return (password)
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
