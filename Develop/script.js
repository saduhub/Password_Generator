"use strict";
// Global Variables
let charLength;
let specialChars;
let uppercase;
let lowercase;
let numeric;
// Selected Elements
const pwForm = document.querySelector('#passwordGeneratorForm');
const pwOutput = document.querySelector('#generatedPassword');
const charLengthSelect = document.querySelector('#passwordLength');
const lowercaseSelect = document.querySelector('#lowercase');
const uppercaseSelect = document.querySelector('#uppercase');
const specialSelect = document.querySelector('#specialCharacters');
const numberSelect = document.querySelector('#numbers');
// Global functions
const createPassword = (chars, lower, upper, special, nums) => {
    let charArray = [];
    let finalArray = [];
    if (lower) {
        charArray.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    }
    if (upper) {
        charArray.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    }
    if (special) {
        charArray.push("!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "[", "]", "|", "\\", ":", ";", "\"", "'", "<", ">", ",", ".", "?", "/");
    }
    if (nums) {
        charArray.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
    }
    let numberOfChars = parseInt(chars, 10);
    for (let i = 0; i < numberOfChars; i++) {
        let randomIndex = Math.floor(Math.random() * charArray.length);
        finalArray.push(charArray[randomIndex]);
    }
    return finalArray.join('');
};
// Event Listeners
pwForm.addEventListener('submit', (e) => {
    e.preventDefault();
    charLength = charLengthSelect.value;
    lowercase = lowercaseSelect.value === 'true';
    uppercase = uppercaseSelect.value === 'true';
    specialChars = specialSelect.value === 'true';
    numeric = numberSelect.value === 'true';
    const generatedPassword = createPassword(charLength, lowercase, uppercase, specialChars, numeric);
    pwOutput.value = generatedPassword;
});
