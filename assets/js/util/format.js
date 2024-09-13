class Format {
    static removeCommas(numberStr) {
        let result = '';
        for (let i = 0; i < numberStr.length; i++) {
            if (numberStr[i] !== ',') {
                result += numberStr[i];
            }
        }
        return result;
    }
    static addCommas(numberStr, type) {
        // Remove Commas Initially
        let cleanStr = this.removeCommas(numberStr);
        let formatted = "";

        for (let i = 0; i < cleanStr.length; i++) {
            if (!this.isAlpha(cleanStr.charAt(i))) {
               formatted += cleanStr.charAt(i); 
            }
        }

        if (type.localeCompare("float") === 0) {
            if (Number.isNaN(formatted)) { return "" }
            let number = parseFloat(formatted);
            return number.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        }
    
        if (type.localeCompare("integer") === 0) {
            if (Number.isNaN(formatted)) { return "" }
            let number = parseInt(formatted, 10);
            return number.toLocaleString();
        }

        return -1;
    }
    static isAlpha(charCode) {
        if (!(charCode >= 65 && charCode <= 90) &&  // A-Z
            !(charCode >= 97 && charCode <= 122))   // a-z
        { 
                return false;
        }
        return true;
    }
}

export default Format;