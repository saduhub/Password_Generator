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
// Event Listeners
pwForm.addEventListener('submit', (e) => {
    e.preventDefault();
    charLength = charLengthSelect.value;
    lowercase = lowercaseSelect.value === 'true';
    uppercase = uppercaseSelect.value === 'true';
    specialChars = specialSelect.value === 'true';
    numeric = numberSelect.value === 'true';
    const generatedPassword = `${charLength},${lowercase},${uppercase},${specialChars},${numeric}, `;
    pwOutput.value = generatedPassword;
});
