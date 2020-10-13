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
let imageryChartsCount = 0;
$("#create-imagery-input").keydown(function (e) {
   const key = e.which
   console.log("key inputted: ",key);
   // if the key the user has pressed is backspace, decrement the count
   if(key === 8) {
      console.log("The user has pressed backspace!");
      imageryChartsCount--;
      if (imageryChartsCount < 0) {
         console.log("You have entered negative territory!")
         imageryChartsCount = 0;
      } 
   } else if (key === 16) {
      console.log("Shift was pressed.");
   } else if (key === 18) {
      console.log("Alt was pressed.");
   } else {
   // else, increment the count
   console.log("The user has pressed any other key!");
   imageryChartsCount++;
}

   console.log("Total inputted chars: ",imageryChartsCount);
   $("#imagery-char-count").html(imageryChartsCount);
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