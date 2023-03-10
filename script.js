// Starting third attempt with a study group and a tutor
// Random Password Generator in JavaScript. (2020, June 19). YouTube. Retrieved March 09, 2023, from https://www.youtube.com/watch?v=v2jfGo7ztm8

// Assignment Code
// Options that password generator can pull from
//If you don't declare passwordLength up here, you can't find the length of it in generate password
var passwordLength = 0;
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "|", "?", "<", ">"]


// What are the prompts for password criteria?
// JavaScript parseInt() Method. (n.d.). W3Schools. Retrieved March 9, 2023, from https://www.w3schools.com/jsref/jsref_parseint.asp
// Going to add these values into the selectionCriteriaArray
function passwordPrompt() {
  var selectionCriteriaArray = [];
  
  var promptValueGiven = prompt("How many characters do you want your password to have?");
  // Store the prompt value given so that we can check to see if it is an integer
  passwordLength = parseInt(promptValueGiven);

  if (confirm("Include lowercase letters?")) {
    selectionCriteriaArray = selectionCriteriaArray.concat(lowercase);
  }

  if (confirm("Include uppercase letters?")) {
    selectionCriteriaArray = selectionCriteriaArray.concat(uppercase);
  }

  if (confirm("Include numbers?")) {
    selectionCriteriaArray = selectionCriteriaArray.concat(numbers);
  }

  if (confirm("Include special characters?")) {
    selectionCriteriaArray = selectionCriteriaArray.concat(special);
  }
  return selectionCriteriaArray;
}

// This will only pull from the items that got pulled into the array based on the user-selected criteria
// If you don't declare var password in the fuction, then you can't return it at the end of the function
// The random character type picks - number, lowercase, uppercase, special
// Then the random character picks a random character from the selected array (number, lowercase, uppercase, special)
// When I concatinated my arrays I turned them into an object which is why I can't use just one math.floor/math.random to loop through everything I want it to loop through, because the index of the individual characters will be [i][i], not just [i].
function generatePassword(selectionCriteriaArray){
  var password = '';
  for (i = 0; i < passwordLength; i++) {
    var randomCharacterType = Math.floor(Math.random() * selectionCriteriaArray.length);
    var randomCharacter = Math.floor(Math.random() * selectionCriteriaArray[randomCharacterType].length);
    password = password + selectionCriteriaArray[randomCharacterType][randomCharacter];
  }
  return password;
}
 
// Write password to the #password input
// Write password requires a function called generate password
// Then take the password text response and tag it into the password id in the html
// password prompt doesn't need anything passed into it because the function didn't have any parameteres when it was created
// If I want the generate password function to work with the result of my passsword promot, I have to store my password prompt result into a variable and then pass that variable inside of the function generate password.  Generate password had a parameter when we created it, so we need to pass it the value took from password prompt in order for generate password to have the right data to work with.
// Once I get the element by ID that I want to change, then I want to use the value property to change what displays in that element.  I am displaying the generate password function that ran from the password prompt criteria that was selected.
function writePassword() {
  var returnSelectionCriteriaArray = passwordPrompt();
  var password = generatePassword(returnSelectionCriteriaArray);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
// When generate button is cliked, it will run the function write password
// Once I get the button element by ID, I can add an event listener to it. Once I have done that, then I can say when the user clicks on it that it should run the write password function.
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


// -----SECOND ATTEMPT-----
// Starting second attempt with this tutorial article: Javascript Password Generator (with Source Code). (n.d.). Tutorials Tonight. Retrieved March 9, 2023, from https://www.tutorialstonight.com/password-generator-in-javascript#writing-javascript-code-for-password-generator

// function generate() {
//   var length = document.getElementById("length").value;
//   var numbers = document.getElementById("numbers").checked;
//   var uppercase = document.getElementById("uppercase").checked;
//   var lowercase = document.getElementById("lowercase").checked;
//   var symbols = document.getElementById("symbols").checked;

//   var securePassword = generatePassword(parseInt(length), numbers, uppercase, lowercase, symbols);

//   document.getElementById("password").innerHTML = securePassword;
// }

// function generatePassword(length, numbers, uppercase, lowercase, symbols) {
//   var characters = " ";

//   if(numbers){
//       characters += "0123456789"
//   }
//   if(uppercase){
//       characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//   }
//   if(lowercase){
//       characters += "abcdefghijklmnopqrstuvwxyz"
//   }
//   if(symbols){
//       characters += "~`!@#$%^&*_-+=<>,.?/"
//   }

//   var passwordArray = [];

//   while(passwordArray.length < length) {
//       var character = characters[Math.floor(Math.random() * characters.length)]; {
//       passwordArray.push(character);
//       }
//   }
//   return passwordArray.join(" ")


// WebD2: Using Javascript to Hide and Show Content. (n.d.). University of Washington. Retrieved March 9, 2023, from https://www.washington.edu/accesscomputing/webd2/student/unit5/module2/lesson5.html
// HTML DOM Style display Property. (n.d.). W3Schools. Retrieved March 9, 2023, from https://www.w3schools.com/jsref/prop_style_display.asp
// function criteriaSelector() {
//   var criteriaDiv = document.getElementById("form-container").style.display;

//     if (criteriaDiv == "none") {
//       criteriaDiv = "block"
//     }
//   }
// Assignment Code
// var generateBtn = document.querySelector("#generate");

// generateBtn.addEventListener("click", showMyDiv); {
//   var showMyDiv = document.getElementById("form-container"); {
//     if (showMyDiv.style.display == "none") {
//         showMyDiv.style.display += "block"
//     }
//   }
// }

// function popUpFunction () {
//   document.getElementsByClassName("form-container").style.display = "block";
// }

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword); {
  
// -----FIRST ATTEMPT-----
// HTML DOM Element addEventListener() Method. (n.d.). W3Schools. Retrieved March 8, 2023, from https://www.w3schools.com/jsref/met_element_addeventlistener.asp
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
// let text;
// if (person == null || person == "") {
//   text = "User cancelled the prompt.";
// } else {
//   text = "Hello " + person + "! How are you today?";
// }

// I made arrays of characters to loop through.
// var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "`", "-", "_", "+", "=", "<", ">", ",", ".", "?", "/", ":", ";"];

// I checked if my for loops worked
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

// I created functions to test
// function callNumber() {
//   for (i = 0; i < number.length; i++) {
//     console.log(number[i]);
//   }
// }

// function callCapital() {
//   for (i = 0; i < capital.length; i++) {
//       console.log(capital[i]);
//   }
// }

// function callLowerCase() {
//   for (i = 0; i < lowerCase.length; i++) {
//       console.log (lowerCase[i]);
//   }
// }

// function callSpecialCharacter () {
//   for (i = 0; i < specialCharacter.length; i++) {
//       console.log (specialCharacter[i]);
//   }
// }

// I called functions to test
// Referenced script.js file in coding pre-work; I forgot the parenthesis.
// callNumber() ;
// callCapital() ;
// callLowerCase();
// callSpecialCharacter();

// JavaScript Program to Get Random Item From an Array. (n.d.). Programiz. Retrieved March 8, 2023, from https://www.programiz.com/javascript/examples/get-random-item
// JavaScript Random Integers. (n.d.). W3Schools. Retrieved March 8, 2023, from https://www.w3schools.com/js/js_random.asp
// I created functions to pull a random index from each array.

// Variables that password generator can pull from
// var character = {
//   number: "0123456789",
//   lowerCase: "abcdefghijklmnopqrstuvwxyz",
//   capitalLetter: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   specialCharacter: "~`!@#$%^&*()_-+={{}}|:;<,>.?/"
// }

// function getRandom(index) {
//   var randomIndex = Math.floor(Math.random() * index.length);
//   var character = index[randomIndex];
//   return character;
// }

// function getRandom(num, cap, low, spe) {
//   var getRandomNumber = Math.floor(Math.random() * num.length);
//   var randomNumber = num[getRandomNumber];
  
//   var getRandomCapital = Math.floor(Math.random() * cap.length);
//   var randomCapital = cap[getRandomCapital];

//   var getRandomLowerCase = Math.floor(Math.random()* low.length);
//   var randomLowerCase = low[getRandomLowerCase];

//   var getRandomSpecialCharacter = Math.floor(Math.random()* spe.length);
//   var randomSpecialCharacter = spe[getRandomSpecialCharacter];

// Returning Multiple Values from a Function. (n.d.). JavaScript Tutorial. Retrieved March 8, 2023, from https://www.javascripttutorial.net/javascript-return-multiple-values/

//   return {randomNumber, randomCapital, randomLowerCase, randomSpecialCharacter}
// }

// var result = getRandom(number, capital, lowerCase, specialCharacter);
// console.log(result);
// var result = getRandom(number, capital, lowerCase, specialCharacter);
// console.log(result);
// var result = getRandom(number, capital, lowerCase, specialCharacter);
// console.log(result);
// var result = getRandom(number, capital, lowerCase, specialCharacter);
// console.log(result);

// JavaScript Popup Boxes. (n.d.). W3Schools. Retrieved March 8, 2023, from https://www.w3schools.com/js/js_popup.asp
// let person = prompt("Please enter your name", "Harry Potter");
// let text;
// if (person == null || person == "") {
//   text = "User cancelled the prompt.";
// } else {
//   text = "Hello " + person + "! How are you today?";
// }