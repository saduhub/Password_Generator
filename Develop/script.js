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
  let includeSpecial;
  let includeNumerical;
  let includeLowercase;
  let includeUppercase;

  while (rightLength == false) {
    passwordLength = prompt("How many characters? (Pick between 8-128)")
    if (isNaN(passwordLength) || passwordLength > 128 || passwordLength < 8) {
      alert("Enter a valid number.")
    } else {
      rightLength = true;
    }
  }

  while (pickedSpecial == false) {
    includeSpecial = prompt("Would you like special characters? (y/n)")
    if (includeSpecial === "y" || includeSpecial === "n") {
      pickedSpecial = true;
    } else {
      alert("Enter a valid response.")
    }
  }

  while (pickedNumerical == false) {
    includeNumerical = prompt("Would you like numeric characters?(y/n)")
    if (includeNumerical === "y" || includeNumerical === "n") {
      pickedNumerical = true;
    } else {
      alert("Enter a valid response.")
    }
  }

  while (pickedLowercase == false) {
    includeLowercase = prompt("Would you like lowercase characters?(y/n)")
    if (includeLowercase === "y" || includeLowercase === "n") {
      pickedLowercase = true;
    } else {
      alert("Enter a valid response.")
    }
  }

  while (pickedUppercase == false) {
    includeUppercase = prompt("Would you like uppercase characters?(y/n)")
    if (includeUppercase === "y" || includeUppercase === "n") {
      pickedUppercase = true;
    } else {
      alert("Enter a valid response.")
    }
  }

  function generatePassword () {
    let divideBy = 0;
    let fromEachCategory;

    if (includeSpecial === "y") {
      divideBy++
    }

    if (includeNumerical === "y") {
      divideBy++
    }

    if (includeLowercase === "y") {
      divideBy++
    }

    if (includeUppercase === "y") {
      divideBy++
    }

    fromEachCategory = Math.floor(passwordLength/divideBy);
    let addExtra = passwordLength - (fromEachCategory * divideBy)
    let extraChars;

    if (includeSpecial === "y") {
      function generateExtraSpecialString (addExtra) {
        let counter = 0;
        let specialString = "";
        while (counter < addExtra) {
          let specialPushed = String.fromCharCode(Math.floor(Math.random() * 33) + 127);
          specialString += specialPushed;
          counter++
        }
        return specialString;
      } 
      extraChars = generateExtraSpecialString();
    } else if (includeNumerical === "y") {
      function generateExtraNumberString (addExtra) {
        let counter = 0;
        let numberString = "";
        while (counter < addExtra) {
          let numberPushed = Math.floor(Math.random() * 10)
          numberString += numberPushed.toString();
          counter++
        }
        return numberString;
      }
      extraChars = generateExtraNumberString();
    } else if (includeLowercase === "y") {
      function generateExtraLowerString (addExtra) {
        let counter = 0;
        let lowerString = "";
        while (counter < addExtra) {
          let lowerPushed = String.fromCharCode(97 + Math.floor(Math.random() * 26));
          lowerString += lowerPushed;
          counter++
        }
        return lowerString;
      }
      extraChars = generateExtraLowerString();
    } else if (includeUppercase === "y") {
      function generateExtraUpperString (addExtra) {
        let counter = 0;
        let upperString = "";
        while (counter < addExtra) {
          let upperPushed = String.fromCharCode(65 + Math.floor(Math.random() * 26));
          upperString += upperPushed;
          counter++
        }
        return upperString;
      }
      extraChars = generateExtraUpperString();
    }

    function generateNumberString (fromEachCategory) {
      let counter = 0;
      let numberString = "";
      while (counter < fromEachCategory) {
        let numberPushed = Math.floor(Math.random() * 10)
        numberString += numberPushed.toString();
        counter++
      }
      return numberString;
    }
    let numbers = generateNumberString();

    function generateSpecialString (fromEachCategory) {
      let counter = 0;
      let specialString = "";
      while (counter < fromEachCategory) {
        let specialPushed = String.fromCharCode(Math.floor(Math.random() * 33) + 127);
        specialString += specialPushed;
        counter++
      }
      return specialString;
    }
    let specials = generateSpecialString();

    function generateLowerString (fromEachCategory) {
      let counter = 0;
      let lowerString = "";
      while (counter < fromEachCategory) {
        let lowerPushed = String.fromCharCode(97 + Math.floor(Math.random() * 26));
        lowerString += lowerPushed;
        counter++
      }
      return lowerString;
    }
    let lowers = generateLowerString();

    function generateUpperString (fromEachCategory) {
      let counter = 0;
      let upperString = "";
      while (counter < fromEachCategory) {
        let upperPushed = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        upperString += upperPushed;
        counter++
      }
      return upperString;
    }
    let uppers = generateUpperString();

    let finalString = numbers + specials + lowers + uppers + extraChars;

    return finalString;
  }

  let password = generatePassword();

  return password;


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// Adding this event listener will excecute the writePassword function when the generate button is clicked
generateBtn.addEventListener("click", writePassword);
