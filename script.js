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
