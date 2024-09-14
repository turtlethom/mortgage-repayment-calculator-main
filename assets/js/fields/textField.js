import Selector from "../selector/selector.js";
import Format from "../util/format.js";

function handleTextSymbols() {
    const textInputs = Selector.selectTextInputs();
    const symbols = Selector.selectSymbols();

    const { amountInput, termInput, interestRateInput } = textInputs;
    const { amountSymbol, termSymbol, interestRateSymbol } = symbols;

    amountInput.addEventListener('focus', () => handleFocus(amountInput, amountSymbol));
    termInput.addEventListener('focus', () => handleFocus(termInput, termSymbol));
    interestRateInput.addEventListener('focus', () => handleFocus(interestRateInput, interestRateSymbol));

    amountInput.addEventListener('focusout', () => handleFocusOut(amountSymbol));
    termInput.addEventListener('focusout', () => handleFocusOut(termSymbol));
    interestRateInput.addEventListener('focusout', () => handleFocusOut(interestRateSymbol));

    amountInput.addEventListener('input', (event) => handleInput(event, "integer"));
    termInput.addEventListener('input', (event) => handleInput(event, "integer"));
}

function handleFocus(input, symbol) {
    if (document.activeElement === input) {
        symbol.classList.add('symbol-active');
    }
}

function handleFocusOut(symbol) {
    symbol.classList.remove('symbol-active');
}

function handleInput(event, numberType) {
    let inputVal = event.target.value;
    if (Number.isNaN(inputVal) || !inputVal ) {
        event.target.value = "";
        return;
    }
    
    let formattedNumber = Format.addCommas(inputVal, numberType);
    event.target.value = formattedNumber;
}

export default handleTextSymbols;