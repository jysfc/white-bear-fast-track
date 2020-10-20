// console.log(`hello`);

// In (pass it) ->

// Do something
// 1. Purely related to the input and output (pure function)
// 2. Or cause an effect elsewhere in the app (a side effect)

// Get something out (return) ->

// Input a string
// Reverse it
// Output that reversed string

// (){}: skeleton (): parameters/argument
function toReverse(str) {
   // try{}catch{}: code block
   // use if(){return/throw} to add error msg if string is empty
   // if (str === ``) {throw Error(`String cannot be empty`);}
   try {
      const chars = str.split(``); // split array of chars, split only good for strings
      const reversedChars = chars.reverse(); // rev chars
      const reversedStr = reversedChars.join(``); // join chars to string
      return reversedStr;
   } catch {
      return `Error: There is a problem with toReverse()`;
   }
}
const reversedString = toReverse(`cat`);
// console.log(reversedString);

//function that return a boolean

// given a string and a number
// check the length of the string
// if the length is over the number, return true
// else return false

//hasError

function checkIsOver(str, num) {
   console.log(`String: ${str}\nNumber: ${num}`); // side effect
   return str.length > num; // if str length is greater than number return true
}
const userInput = `Hello world`;
const maxChars = 240;
const hasError = checkIsOver(userInput, maxChars);
console.log(hasError);

// if (hasError) {// display error message to user} else {// submit the input}

const id = `char-counter`;
const message = `You have exceeded the character limit.`;
showError(hasError, id, message); // calling showError

function showError(hasError, id, message) {
   // id = `#char-counter`, You have exceeded the character limit.
   // id=`char-counter`
   // id=`char-counter-error`
   const errorId = `${id}-error`;
   if (hasError) {
      // boolean
      $(id).show(errorId); // string
      $(errorId).html(message); // msg to display
   } else {
      $(id).hide(errorId);
   }
}
