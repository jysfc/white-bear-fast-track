function getEmailError(email) {
   if (email.length === 0) {
      // email error msg when blank
      return `Please enter your email address.`;
   } else {
      // if there are no errors, return empty string
      return ``;
   }
}
