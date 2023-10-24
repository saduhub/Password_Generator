// Selected Elements
const pwForm = document.querySelector('#passwordGeneratorForm') as HTMLButtonElement;
const pwOutput = document.querySelector('#generatedPassword') as HTMLTextAreaElement;
// Event Listeners
pwForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const generatedPassword: string = "Works!";
    pwOutput.value = generatedPassword;
})
