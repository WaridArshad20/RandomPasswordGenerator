const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b",
    "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6",
     "7", "8", "9",
     "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
     "=","{","[","}","]",",","|",":",";","<",">",".","?","/"
    ];

let passwordLengthEl = document.getElementById("passwordLength")
let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")
let includeSymbolEl = document.getElementById("includeSymbols")
let includeNumbersEl = document.getElementById("includeNumbers")
let onlyAlphabets = characters.filter(char => /^[A-Za-z]$/.test(char))
let symbol_and_alphabets = characters.filter(char => !/^\d$/.test(char));
let numbers_and_alphabets = characters.filter(char => /^[A-Za-z0-9]$/.test(char));

function generateRandomPassword(){
    let passwordLength = passwordLengthEl.value;
    let password1 = "" 
    let password2 = ""

    password1 = randomPassword(password1, passwordLength)
    password2 = randomPassword(password2, passwordLength)

    password1El.textContent = password1
    password2El.textContent = password2
}

function randomPassword(password, length) {
    for(let i=0; i<length; i++) {
        if(includeSymbolEl.checked && includeNumbersEl.checked) {
            password += characters[getRandomNumber(characters.length)]

        } else if (!includeSymbolEl.checked && !includeNumbersEl.checked) {
            password += onlyAlphabets[getRandomNumber(onlyAlphabets.length)]

        } else if (includeSymbolEl.checked && !includeNumbersEl.checked) {
            password += symbol_and_alphabets[getRandomNumber(symbol_and_alphabets.length)]

        } else if (!includeSymbolEl.checked && includeNumbersEl.checked) {
            password += numbers_and_alphabets[getRandomNumber(numbers_and_alphabets.length)]
        }
        
    } 
    return password
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number)
}

function copyPassword(buttonElement) {
    const text = buttonElement.innerText;
    console.log(text)
    navigator.clipboard.writeText(text)

    const toast = document.getElementById("copyToast")
    console.log(toast)
    toast.classList.add('toast--visible')

    setTimeout( () => {
        toast.classList.remove('toast--visible')
    }, 2000)
}
