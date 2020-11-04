function getPasswordError(password, email) {
   const emailNoDomain = email.split(`@`); // remove local part from domain, [`local part`, `gmail.com`]
   const localEmail = emailNoDomain[0]; // showing only local part
   const unacceptablePasswords = getUnacceptablePasswords(); // return a list
   console.log(unacceptablePasswords);

   //every to question data
   const isPwGreaterThanNine = unacceptablePasswords.every((password) => {
      return password.length >= 9;
   });
   console.log(`Is every password >=9 ?`, isPwGreaterThanNine);

   //some
   const hasQwerty = unacceptablePasswords.some((password) => {
      return password.includes(`qwerty`);
   });
   console.log(`Do we have the password (qwerty) ?`, hasQwerty);

   if (password.length === 0) {
      // password input. field blank
      return `Please enter your password.`;
   } else if (password.length < 9) {
      // password error msg. less than 9
      return `Your password must be at least 9 characters.`;
   }
   if (password.includes(localEmail) && localEmail.length >= 4) {
      // pw match email error. contain local part

      return `All or part of your email address cannot be used in your password.`;
   }
   if (unacceptablePasswords.includes(password.toLowerCase())) {
      // password contain insecure password
      return `Your password contains a commonly used password, "${passwordInput.toLowerCase()}" and can be easily discovered by attackers. Please use something else.`;
   } else {
      // if there are no errors, return empty string
      return ``;
   }

   function getUnacceptablePasswords() {
      // combining two array from their respective files
      const combinedInsecurePasswords = mostInsecurePasswords.concat(
         secondMostInsecurePasswords,
         formattedAllInsecurePasswords
      );
      // removing subarrays
      const allFlatPasswords = combinedInsecurePasswords.flat();

      // removing dupe
      const allUniqPasswords = [...new Set(allFlatPasswords)];

      // removing pw skywalker & obama2016
      const firstSlicePasswords = allUniqPasswords.slice(
         0,
         allUniqPasswords.indexOf(`skywalker`)
      );
      // console.log(`here are the first set of passwords: \n`, firstSlicePasswords);
      const secondSlicePasswords = allUniqPasswords.slice(
         allUniqPasswords.indexOf(`1010101010`),
         allUniqPasswords.indexOf(`obama2016`)
      );
      // console.log(`here are the second set of passwords: \n`,secondSlicePasswords);
      const thirdSlicePasswords = allUniqPasswords.slice(
         allUniqPasswords.indexOf(`mypassword`)
      );
      // console.log(`here are the third set of passwords: \n`, thirdSlicePasswords);

      // combined all 3 list
      const hasBooleansUnacceptablePasswords = firstSlicePasswords.concat(
         secondSlicePasswords,
         thirdSlicePasswords
      );
      // console.log(`Final list of unacceptable passwords:`,hasBooleansUnacceptablePasswords);

      // foreach to replace forloop
      let unacceptableStringPasswords = [];
      hasBooleansUnacceptablePasswords.forEach((value) => {
         if (typeof value !== `boolean`) {
            const numAsString = String(value);
            unacceptableStringPasswords = unacceptableStringPasswords.concat(
               numAsString
            );
         }
         // console.log(unacceptableStringPasswords);
      });

      //for loop
      // let unacceptableStringPasswords = [];
      // for (let i = 0; i < hasBooleansUnacceptablePasswords.length; i++) {
      //    const value = hasBooleansUnacceptablePasswords[i];
      //    // keeping numbers or string and leave boolean out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
      //    // ||= or , &&= and, de morgans law
      //    if (typeof value !== `boolean`) {
      //       // convert (numbers) to strings()
      //       const numAsString = String(value);
      //       unacceptableStringPasswords = unacceptableStringPasswords.concat(
      //          numAsString
      //       );
      //       console.log(unacceptableStringPasswords);
      //    }
      // }
      // filter to replace foreach
      const filteredUnacceptablePasswords = unacceptableStringPasswords.filter(
         (unacceptableStringPassword) => unacceptableStringPassword.length >= 9
      );
      // console.log(filteredUnacceptablePasswords);

      // reverse string
      let unacceptableReversedPasswords = [];
      for (let i = 0; i < filteredUnacceptablePasswords.length; i++) {
         const password = filteredUnacceptablePasswords[i];
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
         ...filteredUnacceptablePasswords,
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
