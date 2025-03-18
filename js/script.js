const range = document.querySelector(".slider")
const lengthNumber= document.querySelector(".length-number")
const ABC= document.querySelector("#ABC")
const abc= document.querySelector("#abc")
const num123= document.querySelector("#numbers")
const specialChar = document.querySelector("#specialChar")
const increment = document.querySelector(".increment")
const decrement = document.querySelector(".decrement")

let inputValue = parseInt(range.value);


const upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase= "abcdefghijklmnopqrstuvwxyz"
const number= "123456789"
const char= "@#$%&*{}!<>"

range.addEventListener("input", function() {
  const inputValue= parseInt(this.value)
  lengthNumber.innerHTML= inputValue;
  console.log(typeof lengthNumber.innerHTML);
  return inputValue
});
ABC.addEventListener("input", function() {
  if(ABC.checked==true){
    console.log("hello");
  }else{
    console.log("not");
  }
});
abc.addEventListener("input", function() {
  if(abc.checked==true){
    console.log("hello");
  }else{
    console.log("not");
  }
});
num123.addEventListener("input", function() {
  if(num123.checked==true){
    console.log("hello");
  }else{
    console.log("not");
  }
});
specialChar.addEventListener("input", function() {
  if(specialChar.checked==true){
    console.log("hello");
  }else{
    console.log("not");
  }
});

increment.addEventListener("click", function() {
  if (inputValue < 20) {
    inputValue += 1;
    range.value=inputValue
    lengthNumber.innerHTML = inputValue;
    console.log("increment");
  }
});

decrement.addEventListener("click", function() {
  if (inputValue > 0) {
    inputValue -= 1;
    range.value=inputValue
    lengthNumber.innerHTML = inputValue;
    console.log("decrement");
  }
});



