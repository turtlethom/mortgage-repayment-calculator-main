import applyFormFunctionality from "./form.js";
import handleTextSymbols from "./inputHandler.js";
import handleRadioBtns from "./radioHandler.js";

function main() {
    const form = document.getElementById('mortgage-calculator');

    handleRadioBtns();
    handleTextSymbols();
    applyFormFunctionality(form);
} 

main();