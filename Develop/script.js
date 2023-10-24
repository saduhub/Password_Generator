"use strict";
// Selected Elements
const pwForm = document.querySelector('#passwordGeneratorForm');
const pwOutput = document.querySelector('#generatedPassword');
// Event Listeners
pwForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const generatedPassword = "Works!";
    pwOutput.value = generatedPassword;
});
