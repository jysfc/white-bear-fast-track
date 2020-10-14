const maxChar = 240;
// overlay
$("#save-card").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
});

$("#back-to-answer").click(function () {
   $("#overlay-error").toggleClass("d-flex d-none");
});

//show-delete checkbox
$("#show-delete").click(function () {
   $("#delete-button").removeClass("d-none");
});

//sign up button
$("#sign-up-button").click(function () {
   $("#create-account-card").toggleClass("d-none");
   $("#sign-up-button").toggleClass("d-none");
});

// imagery characters count
$("#imagery-input").keyup(function (e) {
   console.log("Event: ", e);

   // get the text from textarea
   const text = e.target.value;
   console.log(`The user inputted: ${text}`);

   //check the length of the text
   const textLength = text.length;
   console.log(`total inputted chars: ${textLength}`);

   // update the character counter on the page
   $("#imagery-char-count").html(textLength);
   
});

// answer characters count
$("#answer-input").keyup(function (e) {
   console.log("Event: ", e);
   
      // get the text from textarea
      const text = e.target.value;
      console.log(`The user inputted: ${text}`);
   
      // check the length of the text
      const textLength = text.length;
      console.log(`total inputted chars: ${textLength}`);
   
      // update the character counter on the page
      $("#answer-char-count").html(textLength);
   });

// all card top edit characters count
$("#top-edit-input").keyup(function (e) {
   console.log("Event: ", e);
   
      // get the text from textarea
      const text = e.target.value;
      console.log(`The user inputted: ${text}`);
   
      // check the length of the text
      const textLength = text.length;
      console.log(`total inputted chars: ${textLength}`);
   
      // update the character counter on the page
      $("#edit-top-char-count").html(textLength);
   });


// all card bottom edit characters count
$("#bottom-edit-input").keyup(function (e) {
   console.log("Event: ", e);
   
      // get the text from textarea
      const text = e.target.value;
      console.log(`The user inputted: ${text}`);
   
      // check the length of the text
      const textLength = text.length;
      console.log(`total inputted chars: ${textLength}`);
   
      // update the character counter on the page
      $("#edit-bottom-char-count").html(textLength);
   });

