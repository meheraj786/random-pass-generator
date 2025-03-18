const range = document.querySelector(".slider")
const lengthNumber= document.querySelector(".length-number")
const ABC= document.querySelector("#ABC")
const abc= document.querySelector("#abc")
const num123= document.querySelector("#numbers")
const specialChar = document.querySelector("#specialChar")
const increment = document.querySelector(".increment")
const decrement = document.querySelector(".decrement")
const randomPass = document.querySelector(".password")

let inputValue = parseInt(range.value);


const upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase= "abcdefghijklmnopqrstuvwxyz"
const number= "123456789"
const char= "@#$%&*{}!<>"




range.addEventListener("input", function() {
  const inputValue= parseInt(this.value)
  lengthNumber.innerHTML= inputValue;
  console.log(typeof lengthNumber.innerHTML);
  generateRandomPassword(inputValue) 
  return inputValue
});
ABC.addEventListener("input", function() {
  generateRandomPassword(inputValue) 
  
});
abc.addEventListener("input", function() {
  generateRandomPassword(inputValue) 
});
num123.addEventListener("input", function() {
  generateRandomPassword(inputValue) 
});
specialChar.addEventListener("input", function() {
  generateRandomPassword(inputValue) 
});

increment.addEventListener("click", function() {
  
  if (inputValue < 20) {
    inputValue += 1;
    range.value=inputValue
    lengthNumber.innerHTML = inputValue;
    generateRandomPassword(inputValue) 
    console.log("increment");
  }
});

decrement.addEventListener("click", function() {
  if (inputValue > 4) {
    inputValue -= 1;
    range.value=inputValue
    lengthNumber.innerHTML = inputValue;
    generateRandomPassword(inputValue) 
    console.log("decrement");
  }
});



function generateRandomPassword(length) {
  let allChars = '';
  
  if (ABC.checked) {
    allChars += upperCase;
  }
  if (abc.checked) {
    allChars += lowerCase;
  }
  if (num123.checked) {
    allChars += number;
  }
  if (specialChar.checked) {
    allChars += char;
  }

if (ABC.checked || abc.checked || num123.checked || specialChar.checked) {
    let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
    
  randomPass.innerHTML=password
  }
}else{
  randomPass.innerHTML=("Check any character")
}

return password
}

generateRandomPassword(inputValue) 
