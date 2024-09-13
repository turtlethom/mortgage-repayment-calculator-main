import Display from "../util/display.js";

const MortgageParse = {
    parseAmount: (amountText) =>  parseInt(amountText.split(',').join('')),
    parseTerm: (termText) => parseInt(termText),
    parseInterestRate: (percentageText) => parseFloat(percentageText / 100.00)
};

class MortgageData {
    constructor(amountElem, termElem, interestElem) {
        // Parsing Text Inputs
        this.amount = MortgageParse.parseAmount(amountElem.value);
        this.term = MortgageParse.parseTerm(termElem.value);
        this.interestDecimal = MortgageParse.parseInterestRate(interestElem.value);
    }

    getAmountVal() { return this.amount; }

    getTermVal() { return this.term; }

    getInterestRateVal() { return this.interestDecimal }

    isValidInput() { return this.amount && this.term && this.interestDecimal; }

    updateMortgageDisplay(monthlyPayment, totalRepayment) {
    // Grabbing Empty And Completed Result Section
        const emptyResults = document.getElementById('empty-results');
        const completedResults = document.getElementById('completed-results');

        if ( this.isValidInput() ) {
            Display.show(completedResults);
            Display.hide(emptyResults);
        }

        const monthlyPaymentElem = document.getElementById('monthly-payment-text');
        const totalRepaymentElem = document.getElementById('total-repayment-text');

        const formattedMonthlyPayment = monthlyPayment.toLocaleString(
            undefined,
            { minimumFractionDigits: 2, maximumFractionDigits: 2 }
        );

        const formattedTotalRepayment = totalRepayment.toLocaleString(
            undefined,
            { minimumFractionDigits: 2, maximumFractionDigits: 2 }
        );

        monthlyPaymentElem.textContent = "£" + formattedMonthlyPayment;
        totalRepaymentElem.textContent = "£" + formattedTotalRepayment; 
    }
}

export default MortgageData;