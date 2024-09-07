import handleSymbols from "./inputHandler.js";
import applyRadioEvents from "./radioHandler.js";
const form = document.getElementById('mortgage-calculator');

function main() {
    applyRadioEvents();
    handleSymbols();
} 

function handleForm() {}

main()