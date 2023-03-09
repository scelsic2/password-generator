// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays of characters to loop through
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "`", "-", "_", "+", "=", "<", ">", ",", ".", "?", "/", ":", ";"];

// checking if for loops work
// for (i = 0; i < number.length; i++) {
//   console.log(number[i]);
// }

// for (i = 0; i < capital.length; i++) {
//   console.log(capital[i]);
// }

// for (i = 0; i < lowerCase.length; i++) {
//   console.log (lowerCase[i]);
// }

// for (i = 0; i < character.length; i++) {
//   console.log (character[i]);
// }



function callNumber() {
  for (i = 0; i < number.length; i++) {
    console.log(number[i]);
  }
}

function callCapital() {
  for (i = 0; i < capital.length; i++) {
      console.log(capital[i]);
  }
}

function callLowerCase() {
  for (i = 0; i < lowerCase.length; i++) {
      console.log (lowerCase[i]);
  }
}

function callSpecialCharacter () {
  for (i = 0; i < specialCharacter.length; i++) {
      console.log (specialCharacter[i]);
  }
}

// Referenced script.js file in coding pre-work; I forgot the parenthesis.
callNumber() ;
callCapital() ;
callLowerCase();
callSpecialCharacter();

// JavaScript Program to Get Random Item From an Array. (n.d.). Programiz. Retrieved March 8, 2023, from https://www.programiz.com/javascript/examples/get-random-item
// JavaScript Random Integers. (n.d.). W3Schools. Retrieved March 8, 2023, from https://www.w3schools.com/js/js_random.asp

// function getRandom(index) {
//   var randomIndex = Math.floor(Math.random() * index.length);
//   var character = index[randomIndex];
//   return character;
// }

function getRandom(num, cap, low, spe) {
  var getRandomNumber = Math.floor(Math.random() * num.length);
  var randomNumber = num[getRandomNumber];
  
  var getRandomCapital = Math.floor(Math.random() * cap.length);
  var randomCapital = cap[getRandomCapital];

  var getRandomLowerCase = Math.floor(Math.random()* low.length);
  var randomLowerCase = low[getRandomLowerCase];

  var getRandomSpecialCharacter = Math.floor(Math.random()* spe.length);
  var randomSpecialCharacter = spe[getRandomSpecialCharacter];

// Returning Multiple Values from a Function. (n.d.). JavaScript Tutorial. Retrieved March 8, 2023, from https://www.javascripttutorial.net/javascript-return-multiple-values/

  return {randomNumber, randomCapital, randomLowerCase, randomSpecialCharacter}
}

var result = getRandom(number, capital, lowerCase, specialCharacter);
console.log(result);
var result = getRandom(number, capital, lowerCase, specialCharacter);
console.log(result);
var result = getRandom(number, capital, lowerCase, specialCharacter);
console.log(result);
var result = getRandom(number, capital, lowerCase, specialCharacter);
console.log(result);

// JavaScript Popup Boxes. (n.d.). W3Schools. Retrieved March 8, 2023, from https://www.w3schools.com/js/js_popup.asp
// let person = prompt("Please enter your name", "Harry Potter");
// let text;
// if (person == null || person == "") {
//   text = "User cancelled the prompt.";
// } else {
//   text = "Hello " + person + "! How are you today?";
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// HTML DOM Element addEventListener() Method. (n.d.). W3Schools. Retrieved March 8, 2023, from https://www.w3schools.com/jsref/met_element_addeventlistener.asp
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generateBtn.addEventListener("click", writePassword);
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "! How are you today?";
}