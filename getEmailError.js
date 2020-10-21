function getEmailError(email) {
   const emailError = getEmailError(); // return a list
   if (email.length === 0) {
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
   return emailError;
}
