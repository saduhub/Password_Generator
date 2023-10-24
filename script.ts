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
// Global functions
const createPassword = (chars: string, lower: boolean, upper: boolean, special: boolean, nums: boolean): string => {
    
    let charArray: string[] = [];
    let finalArray: string[] = [];

    if (lower) {
        charArray.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
    }
    if (upper) {
        charArray.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
    }
    if (special) {
        charArray.push("!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "[", "]", "|", "\\", ":", ";", "\"", "'", "<", ">", ",", ".", "?", "/")
    }
    if (nums) {
        charArray.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
    }

    let numberOfChars: number = parseInt(chars, 10);
    for (let i = 0; i < numberOfChars; i++) {
        let randomIndex = Math.floor(Math.random() * charArray.length);
        finalArray.push(charArray[randomIndex]);
    }
    
    return finalArray.join('');
}
// Event Listeners
pwForm.addEventListener('submit', (e) => {
    e.preventDefault();

    charLength = charLengthSelect.value;
    lowercase = lowercaseSelect.value === 'true';
    uppercase = uppercaseSelect.value === 'true';
    specialChars = specialSelect.value === 'true';
    numeric = numberSelect.value === 'true';

    const generatedPassword: string = createPassword(charLength, lowercase, uppercase, specialChars, numeric);

    pwOutput.value = generatedPassword;
})


