const passwordDisplay = document.getElementById("password")
const length = document.getElementById("length")
const uppercase = document.getElementById("uppercase")
const lowercase = document.getElementById("lowercase")
const numbers = document.getElementById("numbers")
const symbols = document.getElementById("symbols")

const submitBtn = document.getElementById("submit-btn")
const copyBtn = document.getElementById("copy-btn")

submitBtn.addEventListener("click", generatePassword)
length.addEventListener("input", generatePassword) // optional

copyBtn.addEventListener("click", copyPassword)

function generatePassword() { 
    const len = length.value;

    let password = ''

    let str1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let str2 = str1.toLowerCase()

    let str3 = '0123456789'
    let str4 = '!@#$%^&*()_+~`|}{[]:;?><,./-='
    
    let char = ''

    if (uppercase.checked) {
        char += str1
    }

    if (lowercase.checked) {
        char += str2
    }

    if (numbers.checked) {
        char += str3
    }

    if (symbols.checked) {
        char += str4
    }

    if (!char) return;


    for (let i = 0; i < len; i++){
        password += char.charAt(Math.floor(Math.random() * char.length))
    }

    passwordDisplay.value = password

}

function copyPassword() {
    const password = passwordDisplay.value;
    if (password == 'Your Secure Password') return;

    navigator.clipboard.writeText(password)
    alert("Password copied to clipboard!")
}