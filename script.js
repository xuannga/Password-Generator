// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


//----------------------------------------------------------------------------

//declaring global variables
var lowerCase = ["a", "b", "c", "d", "e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialChar = ["?",".","!","@","#","$","%","^","&"] ;
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
// var arrayChar = [lowerCase, upperCase, specialChar, numeric];


// "generatePassword()" function
function generatePassword() {

  //prompt the user for length of password that user wants , and store answer into variable "passwordLength"
  var passwordLength = userLength();
  //validate IF the length meets min 8 characters and max 128 characters
  if(passwordlength < 8  && passwordLength > 128 && isNaN(passwordLength)) {
    //If it does not meet min, alert user "password length is invalid. Please try again" 
    alert("Your password length is invalid. Please try again.");
    return "";
  }

    // //"arrayName" this holds the names of the characters
    // var arrayName = ["lowercase", "uppercase", "speical Character", "number"]
    // // adds the arrayName to global arrays respectively
    // for (let index = 0; index < arrayName.length; index++) {
    //   addUserChoice(arrayName,arrayChar);
    // }
    
    addUserChoice("lowercase" , lowerCase);
    addUserChoice("uppercase" , upperCase);
    addUserChoice("special character" , specialChar);
    addUserChoice("number" , numeric);


  return password;
}

//prompt user for desired password Length
function userLength() {
  user = Math.floor(prompt("Please enter the length of your desired password, between 8-128"));
  return parseInt(user, 2);
}

//this will concat "addUserChoice" to the desired array
function addUserChoice(arrayName, stringArrray){
  if (confirm("Do you want to add a/an " + arrayName + "?" )) {
    password = password + randomChoice(stringArrray);
    charArray = charArray.concat(stringArrray);
  }
}

// returns random "ranChar" from array
function ranChar(arrStr) {
  return arrStr[Math.floor(Math.random() * arrStr.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
