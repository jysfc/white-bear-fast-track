const dbUserDetails = [`mike@gmail.com`, `javascriptiscool`]; //array

$(`#login-button`).click(function () {
   const emailInput = $("#email-input").val();
   const passwordInput = $("#password-input").val();

   // get a boolean return
   const isUserInDb = checkIsUserInDb(dbUserDetails, emailInput, passwordInput);
   if (isUserInDb) {
      // continue
      console.log(`Let's continue.`);
      disableElement("#login-button"); // disable id if true
      disableElement("#email-input");
      disableElement("#password-input");
   } else {
      console.log(`This user is not found.`);
   }
});

function disableElement(id) {
   $(id).attr(`disabled`, `disabled`); // side effect (cause effect outside of function)
}
function checkIsUserInDb(dbUserDetails, emailInput, passwordInput) {
   // console.log(dbUserDetails);
   // console.log(emailInput);
   // console.log(passwordInput);
   // return true if these two arrays match
   if (dbUserDetails[0] === emailInput && dbUserDetails[1] === passwordInput) {
      return true;
   } else return false;
}
