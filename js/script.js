// const range = document.querySelector(".slider")
// const lengthNumber= document.querySelector(".length-number")
// const ABC= document.querySelector("#ABC")
// const abc= document.querySelector("#abc")
// const num123= document.querySelector("#numbers")
// const specialChar = document.querySelector("#specialChar")
// const increment = document.querySelector(".increment")
// const decrement = document.querySelector(".decrement")
// const randomPass = document.querySelector(".password")
// const comment = document.querySelector(".comment")
// const imgStrong = document.querySelector(".img-strong")
// const imgMedium = document.querySelector(".img-medium")
// const imgWeak = document.querySelector(".img-weak")
// const copyBtn= document.querySelector(".copy")
// const copyIcon= document.querySelector(".copy svg")

// let inputValue = parseInt(range.value);

// const upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// const lowerCase= "abcdefghijklmnopqrstuvwxyz"
// const number= "123456789"
// const char= "@#$%&*{}!<>"


// copyBtn.addEventListener("click", function(){navigator.clipboard.writeText(randomPass.innerHTML)
//   copyIcon.style.animationName= "float"
//   copyIcon.style.animationDuration= "1s"
//   console.log("click");
// });



// range.addEventListener("input", function() {
//   inputValue= parseInt(this.value)
//   lengthNumber.innerHTML= inputValue;
//   generateRandomPassword(inputValue) 
// });
// ABC.addEventListener("input", function() {
//   generateRandomPassword(inputValue) 
  
// });
// abc.addEventListener("input", function() {
//   generateRandomPassword(inputValue) 
// });
// num123.addEventListener("input", function() {
//   generateRandomPassword(inputValue) 
// });
// specialChar.addEventListener("input", function() {
//   generateRandomPassword(inputValue) 
// });

// increment.addEventListener("click", function() {
  
//   if (inputValue < 20) {
//     inputValue += 1;
//     range.value=inputValue
//     lengthNumber.innerHTML = inputValue;
//     generateRandomPassword(inputValue) 
//     console.log("increment");
//   }
// });

// decrement.addEventListener("click", function() {
//   if (inputValue > 4) {
//     range.value=inputValue
//     inputValue -= 1;
//     lengthNumber.innerHTML = inputValue;
//     generateRandomPassword(inputValue) 
//     console.log("decrement");
//   }
// });





// function generateRandomPassword(length) {
//   let allChars = '';
  
//   if (ABC.checked) {
//     allChars += upperCase;
//   }
//   if (abc.checked) {
//     allChars += lowerCase;
//   }
//   if (num123.checked) {
//     allChars += number;
//   }
//   if (specialChar.checked) {
//     allChars += char;
//   }

// if (ABC.checked || abc.checked || num123.checked || specialChar.checked) {
//     let password = '';
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.round(Math.random() * allChars.length - 1);
//   password += allChars[randomIndex];
//   randomPass.innerHTML=password
//   }
//   console.log(randomPass.innerHTML.length);
//   colorChangintEffect(inputValue)
// }else{
//   randomPass.innerHTML=("Check any character")
// }

// }

// function colorChangintEffect(inputValue){
//   if (inputValue>=4 && inputValue<=9) {
//     comment.innerHTML="weak";
//     imgWeak.style.display="block"
//     imgMedium.style.display="none"
//     imgStrong.style.display="none"
//     comment.style.backgroundColor="var(--weak)";
//     lengthNumber.style.borderColor="var(--weak)";
//     copyIcon.style.color="var(--weak)";
//   }else if(inputValue>=10 && inputValue<=14){
//     comment.innerHTML="medium"
//     imgWeak.style.display="none"
//     imgMedium.style.display="block"
//     imgStrong.style.display="none"
//     comment.style.backgroundColor="var(--medium)";
//     lengthNumber.style.borderColor="var(--medium)";
//     copyIcon.style.color="var(--medium)";
//   }else if(inputValue>=15 && inputValue<=20){
//     comment.innerHTML="strong"
//     imgWeak.style.display="none"
//     imgMedium.style.display="none"
//     imgStrong.style.display="block"
//     comment.style.backgroundColor="var(--strong)";
//     lengthNumber.style.borderColor="var(--strong)";
//     copyIcon.style.color="var(--strong)";
//   }
// }

// generateRandomPassword(inputValue) 
// Select all the elements
// Select all the elements
// Select all the elements
const range = document.querySelector(".slider");
const lengthNumber = document.querySelector(".length-number");
const randomPass = document.querySelector(".password");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const ABC= document.querySelector("#ABC")
const abc= document.querySelector("#abc")
const num123= document.querySelector("#numbers")
const specialCharecter = document.querySelector("#specialChar")


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const specialChar = "@#$%&*{}!<>";


let inputValue = parseInt(range.value);


function generateRandomPassword(length) {
  let allChars = '';

  if (document.querySelector("#ABC")?.checked) allChars += upperCase;
  if (document.querySelector("#abc")?.checked) allChars += lowerCase;
  if (document.querySelector("#numbers")?.checked) allChars += number;
  if (document.querySelector("#specialChar")?.checked) allChars += specialChar;

  if (!allChars) {
    randomPass.textContent = "Please select at least one character set.";
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }
  //   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.round(Math.random() * allChars.length - 1);
//   password += allChars[randomIndex];
//   randomPass.innerHTML=password
//   }

  randomPass.textContent = password;
  lengthNumber.textContent = length;
  updatePasswordStrength(password.length);
}


range.addEventListener("input", function () {
  inputValue = parseInt(this.value);
  generateRandomPassword(inputValue);
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
  specialCharecter.addEventListener("input", function() {
    generateRandomPassword(inputValue) 
  });


increment.addEventListener("click", function () {
  if (inputValue < 20) {
    inputValue++;
    range.value = inputValue;
    lengthNumber.textContent = inputValue;
    generateRandomPassword(inputValue);
  }
});


decrement.addEventListener("click", function () {
  if (inputValue > 4) {
    inputValue--;
    range.value = inputValue;
    lengthNumber.textContent = inputValue;
    generateRandomPassword(inputValue);
  }
});


document.querySelector(".copy").addEventListener("click", function () {
  navigator.clipboard.writeText(randomPass.textContent);
  alert("Password copied to clipboard!");
});


function updatePasswordStrength(passwordLength) {
  const comment = document.querySelector(".comment");
  const imgWeak = document.querySelector(".img-weak");
  const imgMedium = document.querySelector(".img-medium");
  const imgStrong = document.querySelector(".img-strong");
  const copyIcon = document.querySelector(".copy svg");

  if (passwordLength >= 4 && passwordLength <= 9) {
    comment.textContent = "Weak";
    imgWeak.style.display = "block";
    imgMedium.style.display = "none";
    imgStrong.style.display = "none";
    comment.style.backgroundColor = "var(--weak)";
    copyIcon.style.color = "var(--weak)";
    lengthNumber.style.borderColor="var(--weak)"
  } else if (passwordLength >= 10 && passwordLength <= 14) {
    comment.textContent = "Medium";
    imgWeak.style.display = "none";
    imgMedium.style.display = "block";
    imgStrong.style.display = "none";
    comment.style.backgroundColor = "var(--medium)";
    copyIcon.style.color = "var(--medium)";
    lengthNumber.style.borderColor="var(--medium)"
  } else if (passwordLength >= 15) {
    comment.textContent = "Strong";
    imgWeak.style.display = "none";
    imgMedium.style.display = "none";
    imgStrong.style.display = "block";
    comment.style.backgroundColor = "var(--strong)";
    copyIcon.style.color = "var(--strong)";
    lengthNumber.style.borderColor="var(--strong)"
  }
}


generateRandomPassword(inputValue);
