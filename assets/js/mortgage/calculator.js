class Calculator {
    static calculateRepaymentMortgage(mortgageData) {
        const { amount, interestDecimal, term } = mortgageData;
        const funcName = this.calculateRepaymentMortgage.name;

        const RATE_PER_MONTH = interestDecimal / 12.0;
        const DIVIDEND = amount * RATE_PER_MONTH;
        const DIVISOR = 1 - Math.pow(1 + RATE_PER_MONTH, -12.0 * term);

        let result = DIVIDEND / DIVISOR; 

        this.handleCalcError(funcName, result);

        return result;
    }
    static calculateInterestOnlyMortgage(mortgageData) {
        const { amount, interestDecimal } = mortgageData;
        const funcName = this.calculateInterestOnlyMortgage.name;

        const DIVIDEND = amount * interestDecimal; 
        const DIVISOR = 12.0;

        let result = DIVIDEND / DIVISOR;

        this.handleCalcError(funcName, result)

        return result;
    }
    static calculateTotalRepayment(monthlyPayment, mortgageData) {
        const { term } = mortgageData;
        const funcName = this.calculateTotalRepayment.name;

        let result = monthlyPayment * 12.0 * term;
        this.handleCalcError(funcName, result);
        return result;
    }

    static handleCalcError(funcName, result) {
        if (Number.isNaN(result)) {
            console.error(`Invalid Operation: \"${funcName}\"`)
        }
    }
}

export default Calculator;