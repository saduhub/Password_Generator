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
    // rewite special array name inside if statments so that it is modified by each condition when applicable . fix bugs relating opting out. scrambling and joining array
    let specialArray;

    console.log(includeSpecial, includeNumerical, includeLowercase, includeUppercase)
    console.log(passwordLength, divideBy, fromEachCategory, addExtra)

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
        let numberArray = [];
        while (counter < addExtra) {
          let numberPushed = Math.floor(Math.random() * 10)
          numberArray.push(numberPushed.toString());
          counter++
        }
        console.log(numberArray)
      } else if (includeLowercase === "y") {
        let counter = 0;
        let lowerArray = [];
        while (counter < addExtra) {
          let lowerPushed = String.fromCharCode(97 + Math.floor(Math.random() * 26));
          lowerArray.push(lowerPushed);
          counter++
        }
        console.log(lowerArray);
      } else if (includeUppercase === "y") {
        let counter = 0;
        let upperArray = [];
        while (counter < addExtra) {
          let upperPushed = String.fromCharCode(65 + Math.floor(Math.random() * 26));
          upperArray.push(upperPushed);
          counter++
        }
      }

    let numbers = [];
    function generateNumberString (fromEachCategory) {
      let counter = 0;
      let numberArray = [];
      while (counter < fromEachCategory) {
        let numberPushed = Math.floor(Math.random() * 10)
        numberArray.push(numberPushed.toString());
        counter++
      }
      return numbers = numberArray;
    }
    generateNumberString(fromEachCategory);

    let specials = [];
    function generateSpecialString (fromEachCategory) {
      let counter = 0;
      let specialArray = [];
      while (counter < fromEachCategory) {
        let specialPushed = String.fromCharCode(Math.floor(Math.random() * 15) + 33);
        specialArray.push(specialPushed);
        counter++
      }
      return specials = specialArray;
    }
    generateSpecialString(fromEachCategory);

    let lowers = []
    function generateLowerString (fromEachCategory) {
      let counter = 0;
      let lowerArray = [];
      while (counter < fromEachCategory) {
        let lowerPushed = String.fromCharCode(97 + Math.floor(Math.random() * 26));
        lowerArray.push(lowerPushed);
        counter++
      }
      return lowers = lowerArray;
    }
    generateLowerString(fromEachCategory);

    let uppers = [];
    function generateUpperString (fromEachCategory) {
      let counter = 0;
      let upperArray = [];
      while (counter < fromEachCategory) {
        let upperPushed = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        upperArray.push(upperPushed);
        counter++
      }
      return uppers = upperArray;
    }
    generateUpperString(fromEachCategory);

    let finalArray = [...uppers, ...lowers, ...specials, ...numbers, ...specialArray] 
    return console.log(finalArray);
  }

  let password = generatePassword();

  return console.log(password);


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// Adding this event listener will excecute the writePassword function when the generate button is clicked
generateBtn.addEventListener("click", writePassword);
