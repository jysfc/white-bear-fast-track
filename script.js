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
$("imagery-input").keyup(function (e) {
   console.log("Event: ",e);

   // get the text from textarea
   const text = e.target.value;
   const username = `Jay`;
   console.log(`${username} inputted: ${text}`);
   
   // check the length of the text
   const textLength = text.length;
   console.log(`Total inputted chars: ${textLength}`);

   // update character counter on page
   $("#imagery-char-count").html(textLength);

   // over max characters
   
});

// answer characters count
let createAnswerInputCharsCount = 0;
$("#create-answer-input").keypress(function () {
   console.log("let's add 1!"); //double quotes surround a string!
   createAnswerInputCharsCount++;
   console.log("Total inputted chars: ",createAnswerInputCharsCount);
   $("#answer-char-count").html(createAnswerInputCharsCount);
});

// all card top edit characters count
let EditTopInputCharsCount = 0;
$("#top-edit-input").keypress(function () {
   console.log("let's add 1!"); //double quotes surround a string!
   EditTopInputCharsCount++;
   console.log("Total inputted chars: ",EditTopInputCharsCount);
   $("#edit-top-char-count").html(EditTopInputCharsCount);
});

// all card bottom edit characters count
let EditBottomInputCharsCount = 0;
$("#bottom-edit-input").keypress(function () {
   console.log("let's add 1!"); //double quotes surround a string!
   EditBottomInputCharsCount++;
   console.log("Total inputted chars: ",EditBottomInputCharsCount);
   $("#edit-bottom-char-count").html(EditBottomInputCharsCount);
});