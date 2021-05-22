// Assignment Code
var generateBtn = document.querySelector("#generate");

//declaring global variables that stores all possible characters
var lowerCase = ["a", "b", "c", "d", "e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialChar = ["?",".","!","@","#","$","%","^","&"] ;
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
//empty charArray to store possible characters
var charArray = [];

function generatePassword() {

  var password = "";

  //asks the user how long they want their password to be, and return it as an integer
  var passwordLength = prompt("Please enter the length of your desired password, between 8-128");
  //validate IF the length meets min 8 characters and max 128 characters
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) || passwordLength === null) {
    alert("Your password length is invalid. Please try again.");
    return "";
  }
  console.log(passwordLength);
  
  //declaring user's choice "wantsLow, wantsUp, wantsSpecial, wantsNum" as boolean
  var wantsUp = confirm("Do you want to add use a uppercase letter?");
  var wantsLow = confirm("Do you want to add use a lowercase letter?");
  var wantsSpecial = confirm("Do you want to add use a special character?");
  var wantsNum = confirm("Do you want to add use a number?");

  //using a while loop to confirm  user's choices 
  while( wantsUp == false && wantsSpecial == false && wantsNum == false && wantsLow == false ) {
    alert("Do you want to use special characters?")
    wantsLow = confirm("Do you want to add use a lowercase letter?");
    wantsUp = confirm("Do you want to add use a uppercase letter?");
    wantsSpecial = confirm("Do you want to add use a special character?");
    wantsNum = confirm("Do you want to add use a number?");
  }


 
  //pushes user's choices and possible choices to empty "charArray"
  if(wantsLow == true){
    charArray.push(lowerCase);
  } 
  if(wantsUp == true){
    charArray.push(upperCase);
  }
  if(wantsSpecial == true) {
    charArray.push(specialChar);
  }
  if(wantsNum == true){
    charArray.push(numeric);
  }
 
 console.log(charArray);

  //for loops through an array choosing characters until the passwordLength is met 
  for (let i = 0; i < passwordLength; i++) {
    var userarray = Math.floor(Math.random[i] * charArray.length);
    password = password + userarray;
  }
  

  // //returns the password string
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
