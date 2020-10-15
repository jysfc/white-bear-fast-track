
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
   const text = $("#imagery-input").val()
   console.log(`The user inputted: ${text}`);

   // check the length of the text
   const textLength = text.length;
   console.log(`total inputted chars: ${textLength}`);

   // update the character counter on the page
   $("#imagery-char-count").html(textLength);
   
   // if text length is greater than 240 
   if (text.length <= 240 && text.length > 0) {
      $("#save-card").removeClass("disabled");

   // add text danger class to char counter
   $("#imagery-characters").removeClass("text-danger");
   $("#imagery-characters").addClass("text-muted");

   // if text length is zero or greater than 240 
   } else if (text.length > 240) {
   // add disabled class to save btn 
   $("#save-card").addClass("disabled");
   $("#imagery-characters").removeClass("text-muted");
   $("#imagery-characters").addClass("text-danger");

   } else if (text.length === 0) {
   // add disabled class to save btn 
    $("#save-card").addClass("disabled");
   $("#imagery-characters").removeClass("text-danger");
   $("#imagery-characters").addClass("text-muted");
   }

});

// answer characters count
$("#answer-input").keyup(function () {
      
   // get the text from textarea
   const text = $("#answer-input").val()
   console.log(`The user inputted: ${text}`);
      
   // check the length of the text
   const textLength = text.length;
   console.log(`total inputted chars: ${textLength}`);
      
   // update the character counter on the page
   $("#answer-char-count").html(textLength);
         
   // if text length is greater than 240 
   if (text.length <= 240 && text.length > 0) {
   $("#next").removeClass("disabled");
      
   // add text danger class to char counter
   $("#answer-characters").removeClass("text-danger");
   $("#answer-characters").addClass("text-muted");
      
   // if text length is zero or greater than 240 
   } else if (text.length > 240) {
   // add disabled class to save btn 
   $("#next").addClass("disabled");
   $("#answer-characters").removeClass("text-muted");
   $("#answer-characters").addClass("text-danger");
      
   } else if (text.length === 0) {
   // add disabled class to save btn 
   $("#next").addClass("disabled");
   $("#answer-characters").removeClass("text-danger");
   $("#answer-characters").addClass("text-muted");
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


   // if text length is greater than 240 
   if (topInput.length <= 240 && topInput.length >= 0) {

   // add text danger class to char counter
   $("#top-edit-characters").removeClass("text-danger");
   } else {
      $("#top-edit-characters").addClass("text-danger");
   }

   // if text length is greater than 240 
   if (bottomInput.length <= 240 && bottomInput.length >= 0) {

   // add text danger class to char counter
      $("#bottom-edit-characters").removeClass("text-danger");
   } else {
      $("#bottom-edit-characters").addClass("text-danger");
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
   let lowerCaseEmail = emailInput.trim().toLowerCase();
   const passwordInput = $("#sign-up-password-input").val();
   const lowerCasePassword = passwordInput.trim().toLowerCase();
   const delimiter = `@`;
      const indexOfEmail = lowerCaseEmail.indexOf(delimiter);
      const localEmail = emailInput.slice(0, indexOfEmail);
      
   // email error msg
   if (lowerCaseEmail.length === 0) {
      $("#sign-up-email-input").addClass("is-invalid");
      $("#sign-up-email-error").removeClass("d-none");
      $("#sign-up-email-error").html("Please enter your email address.");
   } else {
   // email success msg
      $("#sign-up-email-input").removeClass("is-invalid");
      $("#sign-up-email-input").addClass("is-valid");
      $("#sign-up-email-error").addClass("d-none");
   }
   // password input
   if (lowerCasePassword.length === 0) {
         $("#sign-up-password-input").addClass("is-invalid");
         $("#sign-up-password-error").removeClass("d-none");
         $("#sign-up-password-error").html("Please enter your password.");
   } else if  (lowerCasePassword.length <= 9) {
   // password error msg
         $("#sign-up-password-input").addClass("is-invalid");
         $("#sign-up-password-error").removeClass("d-none");
         $("#sign-up-password-error").html("Your password must be at least 9 characters.");
   } else {
   // password success msg
         $("#sign-up-password-input").removeClass("is-invalid");
         $("#sign-up-password-input").addClass("is-valid");
         $("#sign-up-password-error").addClass("d-none");

   } if (lowerCasePassword.includes(localEmail) && localEmail.length >= 4){
   // pw match email error
         $("#sign-up-password-input").addClass("is-invalid");
         $("#sign-up-password-error").removeClass("d-none");
         $("#sign-up-password-error").html("All or part of your email address cannot be used in your password.");
   } 
});


// console.log(sentence.toLowerCase());