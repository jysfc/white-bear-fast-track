function getPasswordError(password, email) {
   const emailNoDomain = email.split(`@`); // remove local part from domain, [`local part`, `gmail.com`]
   const localEmail = emailNoDomain[0]; // showing only local part
   const unacceptablePasswords = getUnacceptablePasswords(); // return a list
   console.log(unacceptablePasswords);

   if (password.length === 0) {
      // password input. field blank
      $("#sign-up-password-input").addClass("is-invalid");
      $("#sign-up-password-error").removeClass("d-none");
      $("#sign-up-password-error").html("Please enter your password.");
   } else if (password.length < 9) {
      // password error msg. less than 9
      $("#sign-up-password-input").addClass("is-invalid");
      $("#sign-up-password-error").removeClass("d-none");
      $("#sign-up-password-error").html(
         "Your password must be at least 9 characters."
      );
   } else {
      // password success msg
      $("#sign-up-password-input").removeClass("is-invalid");
      $("#sign-up-password-input").addClass("is-valid");
      $("#sign-up-password-error").addClass("d-none");
   }
   if (password.includes(localEmail) && localEmail.length >= 4) {
      // pw match email error. contain local part
      $("#sign-up-password-input").addClass("is-invalid");
      $("#sign-up-password-error").removeClass("d-none");
      $("#sign-up-password-error").html(
         "All or part of your email address cannot be used in your password."
      );
   }
   if (unacceptablePasswords.includes(password.toLowerCase())) {
      // password contain insecure password
      $("#sign-up-password-input").addClass("is-invalid");
      $("#sign-up-password-error").removeClass("d-none");
      $("#sign-up-password-error").html(
         `Your password contains a commonly used password, "${passwordInput.toLowerCase()}" and can be easily discovered by attackers. Please use something else.`
      );
   }

   function getUnacceptablePasswords() {
      // combining two array from their respective files
      const combinedInsecurePasswords = mostInsecurePasswords.concat(
         secondMostInsecurePasswords
      );
      // removing subarrays
      const allFlatPasswords = combinedInsecurePasswords.flat();

      // removing dupe
      const allUniqPasswords = [...new Set(allFlatPasswords)];

      // removing pw skywalker & obama2016
      const firstSlicePasswords = allUniqPasswords.slice(
         0,
         allUniqPasswords.indexOf("skywalker")
      );
      // console.log(`here are the first set of passwords: \n`, firstSlicePasswords);
      const secondSlicePasswords = allUniqPasswords.slice(
         allUniqPasswords.indexOf("1010101010"),
         allUniqPasswords.indexOf("obama2016")
      );
      // console.log(`here are the second set of passwords: \n`,secondSlicePasswords);
      const thirdSlicePasswords = allUniqPasswords.slice(
         allUniqPasswords.indexOf("mypassword")
      );
      // console.log(`here are the third set of passwords: \n`, thirdSlicePasswords);

      // combined all 3 list
      const hasBooleansUnacceptablePasswords = firstSlicePasswords.concat(
         secondSlicePasswords,
         thirdSlicePasswords
      );
      // console.log(`Final list of unacceptable passwords:`,hasBooleansUnacceptablePasswords);

      //for loop
      let unacceptableStringPasswords = [];
      for (let i = 0; i < hasBooleansUnacceptablePasswords.length; i++) {
         const value = hasBooleansUnacceptablePasswords[i];
         // keeping numbers or string and leave boolean out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
         // ||= or , &&= and, de morgans law
         if (typeof value !== `boolean`) {
            // convert (numbers) to strings()
            const numAsString = String(value);
            unacceptableStringPasswords = unacceptableStringPasswords.concat(
               numAsString
            );
            // console.log(unacceptableStringPasswords);
         }
      }
      // reverse string
      let unacceptableReversedPasswords = [];
      for (let i = 0; i < unacceptableStringPasswords.length; i++) {
         const password = unacceptableStringPasswords[i];
         const chars = password.split(``); // string to array of char
         // console.log(unacceptablePasswordArrays);
         const copyOfChars = [...chars];
         const reversedChars = copyOfChars.reverse(); // reversing to original
         const reversedPassword = reversedChars.join(``); // array to string
         unacceptableReversedPasswords = unacceptableReversedPasswords.concat(
            reversedPassword
         );
         // console.log(unacceptableReversedPasswords);
      }
      // combine both original & reversed
      const strAndRevUnacceptablePasswords = [
         ...unacceptableStringPasswords,
         ...unacceptableReversedPasswords,
      ];
      // normalizing
      let lowerCaseUnacceptablePasswords = [];
      for (let i = 0; i < strAndRevUnacceptablePasswords.length; i++) {
         const password = strAndRevUnacceptablePasswords[i];
         const lowerCasePassword = password.toLowerCase().trim();
         lowerCaseUnacceptablePasswords = lowerCaseUnacceptablePasswords.concat(
            lowerCasePassword
         );
      }
      // removing dupe
      const unacceptablePasswords = [
         ...new Set(lowerCaseUnacceptablePasswords),
      ];
      return unacceptablePasswords;
   }
}
