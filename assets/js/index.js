import handleForm from "./form/form.js";
import handleTextSymbols from "./userInput/textField.js";
import handleRadioButtons from "./userInput/radioField.js";

function main() {
    const form = document.getElementById('mortgage-calculator');
    if (form !== null) {
        handleRadioButtons();
        handleTextSymbols();
        handleForm(form);
        return 0;
    }

    console.error("Form Does Not Exist");
} 

main();