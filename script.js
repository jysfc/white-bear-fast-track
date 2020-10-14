
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
$("#sign-up-button").click(function () {
   $("#create-account-card").toggleClass("d-none");
   $("#sign-up-button").toggleClass("d-none");
});


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

// all card top edit characters count
$("#top-edit-input").keyup(function () {
   
// get the text from textarea
const text = $("#top-edit-input").val()
console.log(`The user inputted: ${text}`);
         
// check the length of the text
const textLength = text.length;
console.log(`total inputted chars: ${textLength}`);
         
// update the character counter on the page
$("#edit-top-char-count").html(textLength);
            
// if text length is greater than 240 
if (text.length <= 240 && text.length > 0) {
$("#save-card").removeClass("disabled");
         
// add text danger class to char counter
$("#top-edit-characters").removeClass("text-danger");
$("#top-edit-characters").addClass("text-muted");
         
// if text length is zero or greater than 240 
} else if (text.length > 240) {
// add disabled class to save btn 
$("#save-card").addClass("disabled");
$("#top-edit-characters").removeClass("text-muted");
$("#top-edit-characters").addClass("text-danger");
         
} else if (text.length === 0) {
// add disabled class to save btn 
$("#save-card").addClass("disabled");
$("#top-edit-characters").removeClass("text-danger");
$("#top-edit-characters").addClass("text-muted");
}
});


// all card bottom edit characters count
$("#bottom-edit-input").keyup(function () {
   
// get the text from textarea
const text = $("#bottom-edit-input").val()
console.log(`The user inputted: ${text}`);
               
// check the length of the text
const textLength = text.length;
console.log(`total inputted chars: ${textLength}`);
               
// update the character counter on the page
$("#edit-bottom-char-count").html(textLength);
                  
// if text length is greater than 240 
if (text.length <= 240 && text.length > 0) {
$("#save-card").removeClass("disabled");
               
// add text danger class to char counter
$("#bottom-edit-characters").removeClass("text-danger");
$("#bottom-edit-characters").addClass("text-muted");
               
// if text length is zero or greater than 240 
} else if (text.length > 240) {
// add disabled class to save btn 
$("#save-card").addClass("disabled");
$("#bottom-edit-characters").removeClass("text-muted");
$("#bottom-edit-characters").addClass("text-danger");
               
} else if (text.length === 0) {
// add disabled class to save btn 
$("#save-card").addClass("disabled");
$("#bottom-edit-characters").removeClass("text-danger");
$("#bottom-edit-characters").addClass("text-muted");
}
});
