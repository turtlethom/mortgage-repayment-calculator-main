import { calculateInterestOnlyMortgage, calculateRepaymentMortgage, calculateTotalRepayment } from "./calculateMortgage.js";

function applyFormFunctionality(form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        // Grabbing All Inputs
        const amountInput = document.getElementById('mortgage-amount');
        const termInput = document.getElementById('mortgage-term');
        const rateInput = document.getElementById('interest-rate');

        const repaymentInput = document.getElementById('repayment');
        const interestOnlyInput = document.getElementById('interest-only');
        console.log(rateInput);
        console.log(interestOnlyInput);

        // Parsing Text Inputs
        const amount = parseAmount(amountInput.value);
        const term = parseTerm(termInput.value);
        const interestRate = parseInterestRate(rateInput.value);

        // Calculating Mortgage Information
        let monthlyPayment;
        if (repaymentInput.checked) { monthlyPayment = calculateRepaymentMortgage(amount, interestRate, term); }
        if (interestOnlyInput.checked) { monthlyPayment = calculateInterestOnlyMortgage(amount, interestRate); }

        const totalRepayment = calculateTotalRepayment(monthlyPayment, term);
        console.log(monthlyPayment);
        console.log(totalRepayment);
        
    });
}

function parseAmount(amountText) {
    const reformatted = amountText.split(',').join('');
    return parseInt(reformatted);
}

function parseTerm(termText) {
    return parseInt(termText);
}

function parseInterestRate(percentageText) {
    return parseFloat(percentageText) / 100.00;
}

export default applyFormFunctionality;