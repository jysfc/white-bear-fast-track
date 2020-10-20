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
console.log(reversedString);
