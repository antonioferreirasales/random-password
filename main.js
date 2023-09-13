
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const characters = [letters, numbers, symbols];
let passwordLength = 8

let passwordBox1 = document.querySelector("#password-1")
let passwordBox2 = document.querySelector("#password-2")
document.getElementById("bttn-generate").addEventListener("click", outputPassword);

function randomNumber (numberRange) {
  return Math.floor(Math.random() * numberRange)
}

function generatePassword () {
  let password = ""
  for (let i = 0; i < passwordLength; i++) {
    let pointer = randomNumber(characters.length)
    let characterSet = randomNumber(characters[pointer].length)
    password += characters[pointer][characterSet]
    
  }
  return password
}

function outputPassword() {
  passwordBox1.value = generatePassword ()
  passwordBox2.value = generatePassword ()
}

