// Assignment Code
// var generateBtn = document.querySelector("#generate");

// function generatePassword() {
  var lengthString = prompt("Enter the length of characters", "8-128")
  if (lengthString < 8) { lengthString = 8 }
  if (lengthString > 128) { lengthString = 128 }
  if (isNaN(lengthString)) {
    alert("You must enter number!");
    generatePassword()
  }
  var length = parseInt(lengthString)

  // var lowerCase = confirm("Do you want to include lowercase letters?")
  // var upperCase = confirm("Do you want to include uppercase letters?")
  // var numeric = confirm("Do you want to include numbers?")
  // var special = confirm("Do you want to include special characters?")
  var charLower = ""
var charUpper = ""
var charNum = "0123456789"
var charSpecial = ""

  var characters = "abcdefghijklmnopqrstuvwxyz"
  for (var i = 1; i <= length; i++) {
    // Randomly picking charactor to include in password
    var randomNum = Math.floor(Math.random() * characters.length) 
    //Need something in password for the first time through
    if (i==1) {
    var password = characters.slice(randomNum,randomNum+1)
    } else {
      var password = password + characters.slice(randomNum,randomNum+1)
    }
  }

  // return (password)
// }



// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;


// }

// // Add event listener to generate button

// generateBtn.addEventListener("click", writePassword);
