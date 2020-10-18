// overlay
$("#save-card").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
});

$("#back-to-answer").click(function () {
   $("#overlay-error").toggleClass("d-flex d-none");
});

// show-delete checkbox
$("#show-delete").click(function () {
   $("#delete-button").removeClass("d-none");
});

// sign up button
// $("#sign-up-button").click(function () {
//    $("#create-account-card").toggleClass("d-none");
//    $("#sign-up-button").toggleClass("d-none");
// });

// imagery characters count
$("#imagery-input").keyup(function () {
   // get the text from textarea
   const text = $("#imagery-input").val(); // data type = string
   console.log(`The user inputted: ${text}`);

   // check the length of the text
   const textLength = text.length;
   console.log(`total inputted chars: ${textLength}`);

   // update the character counter on the page
   $("#imagery-char-count").html(textLength);

   // if text length is equal/less than 240, greater than 0
   if (text.length <= 240 && text.length > 0) {
      $("#save-card").removeClass("disabled");
      $("#imagery-char-count").removeClass("text-danger");

      // if text length is zero or greater than 240
   } else if (text.length > 240) {
      // add disabled class to save btn
      $("#save-card").addClass("disabled");
      $("#imagery-char-count").addClass("text-danger");
   } else if (text.length === 0) {
      // add disabled class to save btn
      $("#save-card").addClass("disabled");
      $("#imagery-char-count").removeClass("text-danger");
   }
});

// answer characters count
$("#answer-input").keyup(function () {
   // get the text from textarea
   const text = $("#answer-input").val();
   console.log(`The user inputted: ${text}`);

   // check the length of the text
   const textLength = text.length;
   console.log(`total inputted chars: ${textLength}`);

   // update the character counter on the page
   $("#answer-char-count").html(textLength);

   // if the text is acceptable
   // if text length is equal/less than 240, greater than 0
   if (text.length <= 240 && text.length > 0) {
      $("#next").removeClass("disabled");
      $("#answer-char-count").removeClass("text-danger");

      // if text length is zero or greater than 240
   } else if (text.length > 240) {
      // add disabled class to save btn
      $("#next").addClass("disabled");
      $("#answer-char-count").addClass("text-danger");
   } else if (text.length === 0) {
      // add disabled class to save btn
      $("#next").addClass("disabled");
      $("#answer-char-count").removeClass("text-danger");
   }
});

// all card edit characters count
$("#top-edit-input, #bottom-edit-input").keyup(function () {
   // get the text from textarea
   const topInput = $("#top-edit-input").val();
   const bottomInput = $("#bottom-edit-input").val();

   // update the character counter on the page
   $("#top-edit-char-count").html(topInput.length);
   $("#bottom-edit-char-count").html(bottomInput.length);

   // if the text is acceptable
   // if text length is equal/less than 240, equal/greater than 0
   if (topInput.length <= 240 && topInput.length >= 0) {
      // remove text danger class to char counter
      $("#top-edit-char-count").removeClass("text-danger");
   } else {
      // else it is not acceptable
      $("#top-edit-char-count").addClass("text-danger");
   }

   // if text length is equal/less than 240, equal/greater than 0
   if (bottomInput.length <= 240 && bottomInput.length >= 0) {
      // remove text danger class to char counter
      $("#bottom-edit-char-count").removeClass("text-danger");
   } else {
      $("#bottom-edit-char-count").addClass("text-danger");
   }

   // if text length is zero or greater than 240
   if (
      topInput.length > 0 &&
      topInput.length <= 240 &&
      bottomInput.length > 0 &&
      bottomInput.length <= 240
   ) {
      $("#edit-save").removeClass("disabled");
   } else {
      // add disabled class to save btn
      $("#edit-save").addClass("disabled");
   }
});

// lets go button
$("#lets-go").click(function () {
   //email input
   const emailInput = $("#sign-up-email-input").val();
   const lowerCaseEmail = emailInput.trim().toLowerCase();
   const passwordInput = $("#sign-up-password-input").val();
   const delimiter = `@`;
   const indexOfEmail = lowerCaseEmail.indexOf(delimiter); //numbers
   // console.log(`index of ${indexOfEmail}.`);
   const localEmail = emailInput.slice(0, indexOfEmail);

   if (lowerCaseEmail.length === 0) {
      // email error msg
      $("#sign-up-email-input").addClass("is-invalid");
      $("#sign-up-email-error").removeClass("d-none");
      $("#sign-up-email-error").html("Please enter your email address.");
   } else {
      // email success msg
      $("#sign-up-email-input").removeClass("is-invalid");
      $("#sign-up-email-input").addClass("is-valid");
      $("#sign-up-email-error").addClass("d-none");
   }
   if (passwordInput.length === 0) {
      // password input. field blank
      $("#sign-up-password-input").addClass("is-invalid");
      $("#sign-up-password-error").removeClass("d-none");
      $("#sign-up-password-error").html("Please enter your password.");
   } else if (passwordInput.length < 9) {
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
   if (passwordInput.includes(localEmail) && localEmail.length >= 4) {
      // pw match email error. contain local part
      $("#sign-up-password-input").addClass("is-invalid");
      $("#sign-up-password-error").removeClass("d-none");
      $("#sign-up-password-error").html(
         "All or part of your email address cannot be used in your password."
      );
   }
   if (mostInsecurePasswords.includes(passwordInput.toLowerCase())) {
      // password contain insecure password
      $("#sign-up-password-input").addClass("is-invalid");
      $("#sign-up-password-error").removeClass("d-none");
      $("#sign-up-password-error").html(
         `Your password contains a commonly used password, "${passwordInput.toLowerCase()}" and can be easily discovered by attackers. Please use something else.`
      );
   }
   // combining two array
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
      if (typeof value === `number` || typeof value === `string`) {
         // convert (numbers) to strings()
         const numAsString = String(value);
         unacceptableStringPasswords = unacceptableStringPasswords.concat(
            numAsString
         );
         // console.log(unacceptableStringPasswords);
      }
   }
   // reverse string
   let reversedUnacceptablePasswords = [];
   for (let i = 0; i < unacceptableStringPasswords.length; i++) {
      const unacceptablePasswordsStr = unacceptableStringPasswords[i];
      const unacceptablePasswordArrays = unacceptablePasswordsStr.split(``); // string to array
      // console.log(unacceptablePasswordArrays);
      const copyOfUnacceptablePasswordArrays = [...unacceptablePasswordArrays];
      const reverseUnacceptablePasswordArrays = copyOfUnacceptablePasswordArrays.reverse(); // reversing to original
      const newUnacceptablePasswords = reverseUnacceptablePasswordArrays.join(
         ``
      ); // array to string
      reversedUnacceptablePasswords = reversedUnacceptablePasswords.concat(
         newUnacceptablePasswords
      );
      // console.log(reversedUnacceptablePasswords);
   }
   // combine both original & reversed
   const strAndRevUnacceptablePasswords = [
      ...unacceptableStringPasswords,
      ...reversedUnacceptablePasswords,
   ];
   // normalizing
   let lowerCaseUnacceptablePasswords = [];
   for (let i = 0; i < strAndRevUnacceptablePasswords.length; i++) {
      const revisedUnacceptablePasswords = strAndRevUnacceptablePasswords[i];
      const lowerCasePasswords = revisedUnacceptablePasswords.toLowerCase();
      lowerCaseUnacceptablePasswords = lowerCaseUnacceptablePasswords.concat(
         lowerCasePasswords
      );
      console.log(lowerCaseUnacceptablePasswords);
   }
   // removing dupe
   const unacceptablePasswords = [...new Set(lowerCaseUnacceptablePasswords)];
   console.log(unacceptablePasswords);
});
