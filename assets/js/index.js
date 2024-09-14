import handleForm from "./form/form.js";
import handleTextSymbols from "./fields/textField.js";
import handleRadioButtons from "./fields/radioField.js";
import Display from "./util/display.js";
import Selector from "./selector/selector.js";

function main() {
    const form = document.getElementById('mortgage-calculator');
    const resetBtn = document.getElementById('clear-btn');
    resetBtn.addEventListener('click', () => {
        const { emptyResults, completedResults } = Selector.selectResultContainers();
        form.reset();
        Display.show(emptyResults);
        Display.hide(completedResults);
    })
    if (form !== null) {
        handleRadioButtons();
        handleTextSymbols();
        handleForm(form);
        return 0;
    }

    console.error("Form Does Not Exist");
} 

main();