// Assignment Code
var generateBtn = document.querySelector("#generate");
var textArea = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  // validate user inputs
  let rightLength = false;
  let pickedSpecial = false;
  let pickedNumerical = false;
  let pickedLowercase = false;
  let pickedUppercase = false;

  let passwordLength;

  while (rightLength == false) {
    passwordLength = prompt("How many characters? (Pick between 8-128)")
    if (isNaN(passwordLength) || passwordLength > 128 || passwordLength < 8) {
      alert("Enter a valid number.")
    } else {
      rightLength = true;
    }
  }

  // while (pickedSpecial == false) {
  //   let includeSpecial = prompt("Would you like special characters? (y/n)")
  //   if (includeSpecial === "y" || includeSpecial === "n") {
  //     pickedSpecial = true;
  //   } else {
  //     alert("Enter a valid response.")
  //   }
  // }

  // while (pickedNumerical == false) {
  //   let includeNumerical = prompt("Would you like numeric characters?(y/n)")
  //   if (includeNumerical === "y" || includeNumerical === "n") {
  //     pickedNumerical = true;
  //   } else {
  //     alert("Enter a valid response.")
  //   }
  // }

  // while (pickedLowercase == false) {
  //   let includeLowercase = prompt("Would you like lowercase characters?(y/n)")
  //   if (includeLowercase === "y" || includeLowercase === "n") {
  //     pickedLowercase = true;
  //   } else {
  //     alert("Enter a valid response.")
  //   }
  // }

  // while (pickedUppercase == false) {
  //   let includeUppercase = prompt("Would you like uppercase characters?(y/n)")
  //   if (includeUppercase === "y" || includeUppercase === "n") {
  //     pickedUppercase = true;
  //   } else {
  //     alert("Enter a valid response.")
  //   }
  // }

  console.log(passwordLength)

  function generatePassword () {

  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// Adding this event listener will excecute the writePassword function when the generate button is clicked
generateBtn.addEventListener("click", writePassword);
