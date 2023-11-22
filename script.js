class PasswordGenerater {
    constructor() {
        this.uperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.lowerCase = 'abcdefghijklmnopqrstuvwxyz';
        this.numbers = '1234567890';
        this.symbols = '!@#$%^&*()_+=';

        this.allChar = this.lowerCase;
    }

    generatePassword(length, includeUperCase, includeLowerCase, inlcudeNumbers, includeSymbols) {
        // let char=this.lowerCase;
        let char = ''
        if (includeUperCase) {
            char += this.uperCase;
        }
        if (includeLowerCase) {
            char += this.lowerCase;
        }
        if (inlcudeNumbers) {
            char += this.numbers;
        }
        if (includeSymbols) {
            char += this.symbols;
        }
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * char.length);
            password += char.charAt(randomIndex);
        }
        return password;
    }
}

function generatePassword() {
    let uppercase = document.getElementById("uppercase");
    let lowerCase = document.getElementById("lowercase");
    let Number = document.getElementById("number");
    let Symbol = document.getElementById("symbol");
    const password = new PasswordGenerater();
    const passwordlen = 12;
    const includeUperCase = uppercase.checked;
    const includeLowerCase = lowerCase.checked;
    const inlcudeNumbers = Number.checked;
    const includeSymbols = Symbol.checked;
    const passwordOutputbox = document.querySelector('#output');
    let output = password.generatePassword(passwordlen, includeUperCase, includeLowerCase, inlcudeNumbers, includeSymbols)
    passwordOutputbox.innerHTML = output;
}
