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
    if (includeLowercase === "n" && includeNumerical === "n" && includeSpecial === "n" && includeUppercase === "n") {
      alert("You have to pick at least one category! (Numeric/Special/Uppercase/Lowercase)")
    } else if (includeUppercase === "y" || includeUppercase === "n") {
      pickedUppercase = true;
    } else {
      alert("Enter a valid response.")
    }
  }

  function generatePassword () {
    let divideBy = 0;
    let fromEachCategory;
    let finalArray = [];

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
    // rewite special array name inside if statments so that it is modified by each condition when applicable . fix bugs relating opting out. scrambling and joining array

    console.log(`Special?: ${includeSpecial}, Numerical?: ${includeNumerical}, Lowercase?: ${includeLowercase}, Uppercase?: ${includeUppercase}`)
    console.log(`passwordLength: ${passwordLength}, divideBy: ${divideBy}, fromEachCategory: ${fromEachCategory}, addExtra: ${addExtra}`)

    if (includeSpecial === "y") {
        let counter = 0;
        specialArray = [];
        while (counter < addExtra) {
          let specialPushed = String.fromCharCode(Math.floor(Math.random() * 15) + 33);
          specialArray.push(specialPushed);
          counter++
        }
      } else if (includeNumerical === "y") {
        let counter = 0;
        while (counter < addExtra) {
          let numberPushed = Math.floor(Math.random() * 10)
          finalArray.push(numberPushed.toString());
          counter++
        }
      } else if (includeLowercase === "y") {
        let counter = 0;
        while (counter < addExtra) {
          let lowerPushed = String.fromCharCode(97 + Math.floor(Math.random() * 26));
          finalArray.push(lowerPushed);
          counter++
        }
      } else if (includeUppercase === "y") {
        let counter = 0;
        while (counter < addExtra) {
          let upperPushed = String.fromCharCode(65 + Math.floor(Math.random() * 26));
          finalArray.push(upperPushed);
          counter++
        }
      }

    if (includeNumerical === "y") {
      function generateNumberString (fromEachCategory) {
        let counter = 0;
        while (counter < fromEachCategory) {
          let numberPushed = Math.floor(Math.random() * 10)
          finalArray.push(numberPushed.toString());
          counter++
        }
      }
      generateNumberString(fromEachCategory);
    }

    if (includeSpecial === "y") {
      function generateSpecialString (fromEachCategory) {
        let counter = 0;
        while (counter < fromEachCategory) {
          let specialPushed = String.fromCharCode(Math.floor(Math.random() * 15) + 33);
          finalArray.push(specialPushed);
          counter++
        }
      }
      generateSpecialString(fromEachCategory);
    }
    
    if (includeLowercase === "y") {
      function generateLowerString (fromEachCategory) {
        let counter = 0;
        while (counter < fromEachCategory) {
          let lowerPushed = String.fromCharCode(97 + Math.floor(Math.random() * 26));
          finalArray.push(lowerPushed);
          counter++
        }
      }
      generateLowerString(fromEachCategory);
    }

    if (includeUppercase === "y") {
      function generateUpperString (fromEachCategory) {
        let counter = 0;
        while (counter < fromEachCategory) {
          let upperPushed = String.fromCharCode(65 + Math.floor(Math.random() * 26));
          finalArray.push(upperPushed);
          counter++
        }
      }
      generateUpperString(fromEachCategory);
    }
 
    return finalArray;
  }

  let password = generatePassword();

  return console.log(password);


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// Adding this event listener will excecute the writePassword function when the generate button is clicked
generateBtn.addEventListener("click", writePassword);
