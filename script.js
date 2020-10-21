// overlay
$(`#save-card`).click(function () {
   $(`#overlay-success`).toggleClass(`d-flex d-none`);
});

$(`#back-to-answer`).click(function () {
   $(`#overlay-error`).toggleClass(`d-flex d-none`);
});

// show-delete checkbox
$(`#show-delete`).click(function () {
   $(`#delete-button`).removeClass(`d-none`);
});

// sign up button
// $(`#sign-up-button`).click(function () {
//    $(`#create-account-card`).toggleClass(`d-none`);
//    $(`#sign-up-button`).toggleClass(`d-none`);
// });

// imagery characters count
$(`#imagery-input`).keyup(function () {
   // get the text from textarea
   const text = $(`#imagery-input`).val(); // data type = string
   console.log(`The user inputted: ${text}`);

   // check the length of the text
   const textLength = text.length;
   console.log(`total inputted chars: ${textLength}`);

   // update the character counter on the page
   $(`#imagery-char-count`).html(textLength);

   // if text length is equal/less than 240, greater than 0
   if (text.length <= 240 && text.length > 0) {
      $(`#save-card`).removeClass(`disabled`);
      $(`#imagery-char-count`).removeClass(`text-danger`);

      // if text length is zero or greater than 240
   } else if (text.length > 240) {
      // add disabled class to save btn
      $(`#save-card`).addClass(`disabled`);
      $(`#imagery-char-count`).addClass(`text-danger`);
   } else if (text.length === 0) {
      // add disabled class to save btn
      $(`#save-card`).addClass(`disabled`);
      $(`#imagery-char-count`).removeClass(`text-danger`);
   }
});

// answer characters count
$(`#answer-input`).keyup(function () {
   // get the text from textarea
   const text = $(`#answer-input`).val();
   console.log(`The user inputted: ${text}`);

   // check the length of the text
   const textLength = text.length;
   console.log(`total inputted chars: ${textLength}`);

   // update the character counter on the page
   $(`#answer-char-count`).html(textLength);

   // if the text is acceptable
   // if text length is equal/less than 240, greater than 0
   if (text.length <= 240 && text.length > 0) {
      $(`#next`).removeClass(`disabled`);
      $(`#answer-char-count`).removeClass(`text-danger`);

      // if text length is zero or greater than 240
   } else if (text.length > 240) {
      // add disabled class to save btn
      $(`#next`).addClass(`disabled`);
      $(`#answer-char-count`).addClass(`text-danger`);
   } else if (text.length === 0) {
      // add disabled class to save btn
      $(`#next`).addClass(`disabled`);
      $(`#answer-char-count`).removeClass(`text-danger`);
   }
});

// all card edit characters count
$(`#top-edit-input, #bottom-edit-input`).keyup(function () {
   // get the text from textarea
   const topInput = $(`#top-edit-input`).val();
   const bottomInput = $(`#bottom-edit-input`).val();

   // update the character counter on the page
   $(`#top-edit-char-count`).html(topInput.length);
   $(`#bottom-edit-char-count`).html(bottomInput.length);

   // if the text is acceptable
   // if text length is equal/less than 240, equal/greater than 0
   if (topInput.length <= 240 && topInput.length >= 0) {
      // remove text danger class to char counter
      $(`#top-edit-char-count`).removeClass(`text-danger`);
   } else {
      // else it is not acceptable
      $(`#top-edit-char-count`).addClass(`text-danger`);
   }

   // if text length is equal/less than 240, equal/greater than 0
   if (bottomInput.length <= 240 && bottomInput.length >= 0) {
      // remove text danger class to char counter
      $(`#bottom-edit-char-count`).removeClass(`text-danger`);
   } else {
      $(`#bottom-edit-char-count`).addClass(`text-danger`);
   }

   // if text length is zero or greater than 240
   if (
      topInput.length > 0 &&
      topInput.length <= 240 &&
      bottomInput.length > 0 &&
      bottomInput.length <= 240
   ) {
      $(`#edit-save`).removeClass(`disabled`);
   } else {
      // add disabled class to save btn
      $(`#edit-save`).addClass(`disabled`);
   }
});

// lets go button
$(`#lets-go`).click(function () {
   // when let go's clicked, we are getting email and pw input
   const emailInput = $(`#sign-up-email-input`).val();
   const email = emailInput.trim().toLowerCase();
   const password = $(`#sign-up-password-input`).val();

   //passing values into functions

   const passwordError = getPasswordError(password, email); // getPasswordError should return a string
   console.log(passwordError);
   if (passwordError !== ``) {
      showError(`#sign-up-password`, passwordError);
   } else {
      hideError(`#sign-up-password`, passwordError);
   }

   const emailError = getEmailError(email); // getEmailError should return a string
   console.log(emailError);
   if (emailError !== ``) {
      showError(`#sign-up-email`, emailError);
   } else {
      hideError(`#sign-up-email`, emailError);
   }

   // Date user signed up
   let signedUpDate = new Date(Date.now()); // pulling current day as object
   // signedUpDate = new Date(2020, 3, 7, 13, 15, 0, 000); // [april 7 2020] testing pad
   const year = signedUpDate.getFullYear(); // pulling prop as number
   const month = signedUpDate.getMonth();
   const date = signedUpDate.getDate();
   const yearString = String(year); //converting to string to combine
   const monthString = String(month + 1); //+1 since month is 0-11
   const dateString = String(date);
   const paddedMonth = monthString.padStart(2, `0`); // add padStart to make add 0 in front of < 10 digit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
   const paddedDate = dateString.padStart(2, `0`);
   const createdAt = yearString + paddedMonth + paddedDate;
   console.log(createdAt);
});

//email & pw error
//side effect functions jQuery
function showError(element, message) {
   $(`${element}-input`).addClass(`is-invalid`);
   $(`${element}-error`).html(message);
}

function hideError(element, message) {
   $(`${element}-input`).removeClass(`is-invalid`);
   $(`${element}-error`).html(message);
}
