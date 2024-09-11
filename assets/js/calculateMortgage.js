function calculateRepaymentMortgage(amount, interestDecimal, term) {
    /* Mortgage Payments = 
    ======================
    Mortgage Amount * (Interest Rate / 12) 
    --------------------------------------
    (1 - (1 + (Interest Rate / 12))^-12 * term)
    ======================
    */
    const RATE_PER_MONTH = interestDecimal / 12.0;
    const DIVIDEND = amount * RATE_PER_MONTH;
    const DIVISOR = 1 - Math.pow(1 + RATE_PER_MONTH, -12.0 * term);

    return ( DIVIDEND / DIVISOR );

}

function calculateInterestOnlyMortgage(amount, interestDecimal) {
    const DIVIDEND = amount * interestDecimal; 
    const DIVISOR = 12.0;

    return ( DIVIDEND / DIVISOR );
}

function calculateTotalRepayment(monthlyPayment, term) {
    return monthlyPayment * 12.0 * term;
}

export {
    calculateRepaymentMortgage,
    calculateInterestOnlyMortgage,
    calculateTotalRepayment
};