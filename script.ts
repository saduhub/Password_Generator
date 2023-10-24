// Global Variables
let charLength: string;
let specialChars: boolean;
let uppercase: boolean;
let lowercase: boolean;
let numeric: boolean;
// Selected Elements
const pwForm = document.querySelector('#passwordGeneratorForm') as HTMLButtonElement;
const pwOutput = document.querySelector('#generatedPassword') as HTMLTextAreaElement;
const charLengthSelect = document.querySelector('#passwordLength') as HTMLSelectElement;
const lowercaseSelect = document.querySelector('#lowercase') as HTMLSelectElement;
const uppercaseSelect = document.querySelector('#uppercase') as HTMLSelectElement;
const specialSelect = document.querySelector('#specialCharacters') as HTMLSelectElement;
const numberSelect = document.querySelector('#numbers') as HTMLSelectElement;
// Event Listeners
pwForm.addEventListener('submit', (e) => {
    e.preventDefault();

    charLength = charLengthSelect.value;
    lowercase = lowercaseSelect.value === 'true';
    uppercase = uppercaseSelect.value === 'true';
    specialChars = specialSelect.value === 'true';
    numeric = numberSelect.value === 'true';

    const generatedPassword: string = `${charLength},${lowercase},${uppercase},${specialChars},${numeric}, `;
    pwOutput.value = generatedPassword;
})
