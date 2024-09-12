import Display from "../util/display";

function calculateRepaymentMortgage(amount, interestDecimal, term) {
    const RATE_PER_MONTH = interestDecimal / 12.0;
    const DIVIDEND = amount * RATE_PER_MONTH;
    const DIVISOR = 1 - Math.pow(1 + RATE_PER_MONTH, -12.0 * term);

    const result = DIVIDEND / DIVISOR; 

    if (Number.isNaN(result)) {
        console.error("Could not compute mortgage type \"Repayment\"");
    }

    return result;

}

function calculateInterestOnlyMortgage(amount, interestDecimal) {
    const DIVIDEND = amount * interestDecimal; 
    const DIVISOR = 12.0;

    const result = DIVIDEND / DIVISOR;

    if (Number.isNaN(result)) {
        console.error("Could not compute mortgage type : \"Interest Only\"");
        return;
    }

    return result;
}

function calculateTotalRepayment(monthlyPayment, term) {
    const result = monthlyPayment * 12.0 * term;
    if (Number.isNaN(result)) {
        console.error("Could not compute \"Total Repayments Over Term\"");
        return;
    }
    return monthlyPayment * 12.0 * term;
}

class CurrentMortgage {
    constructor(amount, term, interestVal) {
        this.amount = amount;
        this.term = term;
        this.interestDecimal = interestVal;
    }


}

function updateMortgageDisplay() {
    // Grabbing Empty And Completed Result Section
    const emptyResults = document.getElementById('empty-results');
    const completedResults = document.getElementById('completed-results');
    
    Display.showElement()
}
export {
    calculateRepaymentMortgage,
    calculateInterestOnlyMortgage,
    calculateTotalRepayment,
    updateMortgageDisplay
};