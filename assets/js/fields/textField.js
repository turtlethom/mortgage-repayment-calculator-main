import Format from "../util/format.js";

function handleTextSymbols() {
    const amountInput = document.getElementById('mortgage-amount');
    const sterlingSymbol = document.getElementById('sterling');

    const termInput = document.getElementById('mortgage-term');
    const termSymbol = document.getElementById('term-symbol');

    const interestRateInput = document.getElementById('interest-rate');
    const percentageSymbol = document.getElementById('percentage-unit');

    amountInput.addEventListener('focus', () => handleFocus(amountInput, sterlingSymbol));
    termInput.addEventListener('focus', () => handleFocus(termInput, termSymbol));
    interestRateInput.addEventListener('focus', () => handleFocus(interestRateInput, percentageSymbol));

    amountInput.addEventListener('focusout', () => handleFocusOut(sterlingSymbol));
    termInput.addEventListener('focusout', () => handleFocusOut(termSymbol));
    interestRateInput.addEventListener('focusout', () => handleFocusOut(percentageSymbol));

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