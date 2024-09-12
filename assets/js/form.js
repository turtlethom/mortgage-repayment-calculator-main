import { calculateInterestOnlyMortgage, calculateRepaymentMortgage, calculateTotalRepayment } from "./mortgage/mortgage.js";
import Display from "./util/display.js";

const MortgageParse = {
    parseAmount: (amountText) =>  parseInt(amountText.split(',').join('')),
    parseTerm: (termText) => parseInt(termText),
    parseInterestRate: (percentageText) => parseFloat(percentageText / 100.00)
};

function applyFormFunctionality(form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        // Grabbing All Text Inputs
        const amountInput = document.getElementById('mortgage-amount');
        const termInput = document.getElementById('mortgage-term');
        const rateInput = document.getElementById('interest-rate');

        // Grabbing All Radio Inputs
        const repaymentInput = document.getElementById('repayment');
        const interestOnlyInput = document.getElementById('interest-only');

        // Parsing Text Inputs
        const amount = MortgageParse.parseAmount(amountInput.value);
        const term = MortgageParse.parseTerm(termInput.value);
        const interestRate = MortgageParse.parseInterestRate(rateInput.value);

        // Calculating Mortgage Information
        let monthlyPayment;
        if (repaymentInput.checked) { monthlyPayment = calculateRepaymentMortgage(amount, interestRate, term); }
        if (interestOnlyInput.checked) { monthlyPayment = calculateInterestOnlyMortgage(amount, interestRate); }

        const totalRepayment = calculateTotalRepayment(monthlyPayment, term);
        console.log(monthlyPayment);
        console.log(totalRepayment);

        // updateMortgageDisplay();
        // Display.hideElement(emptyResults);
        // Display.showElement(completedResults);

    });
}

export default applyFormFunctionality;