class Selector {
    static selectResultContainers() {
        const emptyResults = document.getElementById('empty-results');
        const completedResults = document.getElementById('completed-results');
        return { emptyResults, completedResults };
    }
    static selectTextInputs() {
        const amountInput = document.getElementById('mortgage-amount');
        const termInput = document.getElementById('mortgage-term');
        const interestRateInput = document.getElementById('interest-rate');
        return { amountInput, termInput, interestRateInput }
    }

    static selectSymbols() {
        const amountSymbol = document.getElementById('sterling');
        const termSymbol = document.getElementById('term-symbol');
        const interestRateSymbol = document.getElementById('percentage-unit');
        return { amountSymbol, termSymbol, interestRateSymbol }
    }
    static selectTextDisplays() {
        const monthlyPaymentElem = document.getElementById('monthly-payment-text');
        const totalRepaymentElem = document.getElementById('total-repayment-text');
        return { monthlyPaymentElem, totalRepaymentElem };
    }
}

export default Selector;