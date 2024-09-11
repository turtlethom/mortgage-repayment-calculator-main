function handleRadioBtns() {

    // Selecting Repayment Input & Container
    const repaymentContainer = document.getElementById('repayment-wrapper');
    const repaymentInput = document.getElementById('repayment');

    // Selecting Interest Only Input & Container
    const interestContainer = document.getElementById('interest-only-wrapper');
    const interestInput = document.getElementById('interest-only');

    // Handling Click Events On Container
    addManualClickEvent(repaymentContainer, repaymentInput);
    addManualClickEvent(interestContainer, interestInput);

    // Handling Change Events On Radio Inputs
    repaymentInput.addEventListener('change', () => {
        handleRadioChange(
            repaymentContainer,
            repaymentInput,
            interestContainer
        );
    }); 
    interestInput.addEventListener('change', () => {
        handleRadioChange(
            interestContainer,
            interestInput,
            repaymentContainer
        );
    }); 
}

function addManualClickEvent(radioContainer, radioInput) {
    // Creating A Change Event Instance For Manual Trigger
    const changeEvent = new Event('change');
    radioContainer.addEventListener('click', () => {
        if (radioInput && !radioInput.checked) {
            radioInput.checked = true;
            radioInput.dispatchEvent(changeEvent);
        } 
    });
}


function handleRadioChange(radioContainer, radioInput, otherContainer) {
    if (radioInput && radioInput.checked) {
        radioContainer.classList.add('selected');
        otherContainer.classList.remove('selected');
        return;
    }
    radioContainer.classList.remove('selected')
}

export default handleRadioBtns;