import MortgageData from "../mortgage/stats.js";
import Calculator from "../mortgage/calculator.js";

function applyFormFunctionality(form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        // Grabbing All Text Inputs
        const amountInput = document.getElementById('mortgage-amount');
        const termInput = document.getElementById('mortgage-term');
        const rateInput = document.getElementById('interest-rate');
        // Handling Text Inputs In MortgageData
        const mortgageData = new MortgageData(amountInput, termInput, rateInput);

        // Grabbing All Radio Inputs
        const repaymentInput = document.getElementById('repayment');
        const interestOnlyInput = document.getElementById('interest-only');


        // Calculating Mortgage Information
        let monthlyPayment;
        if (repaymentInput.checked) { 
            monthlyPayment = Calculator.calculateRepaymentMortgage(mortgageData); 
        }
        if (interestOnlyInput.checked) {
            monthlyPayment = Calculator.calculateInterestOnlyMortgage(mortgageData);
        }

        const totalRepayment = Calculator.calculateTotalRepayment(monthlyPayment, mortgageData);
        console.log(monthlyPayment);
        console.log(totalRepayment);

        mortgageData.updateMortgageDisplay(monthlyPayment, totalRepayment);
    });
}

export default applyFormFunctionality;