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

function generateRandomPassword(){
    let passwordLength = passwordLengthEl.value;
    let randomNumber1 = ""
    let randomNumber2 = ""
    for(let i=0; i<passwordLength; i++) {
        randomNumber1 += characters[getRandomNumber()]
    }  

    for(let i=0; i<passwordLength; i++) {
        randomNumber2 += characters[getRandomNumber()]
    }

    password1El.textContent = randomNumber1
    password2El.textContent = randomNumber2  
}

function getRandomNumber() {
    return Math.floor(Math.random() * characters.length)
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
