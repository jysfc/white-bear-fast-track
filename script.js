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

   // email TLD
   const emailTopLevelDomain = email.split(`.`); // mike@gmail, com
   const lastIndexOfEmail = emailTopLevelDomain[1];
   // console.log(lastIndexOfEmail);

   // Date user signed up
   let signedUpDate = new Date(Date.now()); // pulling current day as object
   // signedUpDate = new Date(2020, 3, 7, 13, 15, 0, 000); // [april 7 2020] testing pad
   const year = signedUpDate.getFullYear(); // pulling prop as number
   const month = signedUpDate.getMonth();
   const date = signedUpDate.getDate();
   // const hour = signedUpDate.getHours();
   // const minutes = signedUpDate.getMinutes();
   // const seconds = signedUpDate.getSeconds();
   const milliseconds = signedUpDate.getMilliseconds();
   const yearString = String(year); //converting to string to combine
   const monthString = String(month + 1); //+1 since month is 0-11
   const dateString = String(date);
   const millisecondsString = String(milliseconds);
   const paddedMilliseconds = millisecondsString.padStart(3, `0`);
   const paddedMonth = padStart(monthString, 2, `0`);
   const paddedDate = padLeft(dateString);
   // const paddedMonth = monthString.padStart(2, `0`); // add padStart to make add 0 in front of < 10 digit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
   // const paddedDate = dateString.padStart(2, `0`);
   const createdAt = yearString + paddedMonth + paddedDate;
   console.log(`login created at ${createdAt}`);

   // unique user id str
   const uniqueId = getRandomInt(0, 999);
   const uniqueIdNumAsStr = uniqueId.toFixed(0);

   const id = uniqueIdNumAsStr + paddedMilliseconds;
   console.log(`The unique user ID is ${id}`);

   // user object
   const user = {
      email: email,
      password: password,
      createdAt: getCreatedAt(),
      id: getId(),
      emailTId: getTld(), // a string like `com` or `org` or `edu`
      socialProfiles: [
         {
            site: "facebook",
            siteId: "530c2716-36e2-4a80-93b7-0e8483d629e1",
            username: "",
            image: {
               sm: "",
               orig: "",
            },
         },
         {
            site: "twitter",
            siteId: "79023b4d-57a2-406b-8efe-bda47fb1696c",
            username: "",
            image: {
               sm: "",
               md: "",
               orig: "",
            },
         },
      ],
   };
   if ((emailError, passwordError !== ``)) {
      console.log(user);
      return user;
   }
   function getCreatedAt() {
      return createdAt;
   }
   function getId() {
      return id;
   }
   function getTld() {
      return lastIndexOfEmail;
   }

   // new User(activeUser)

   const activeUser = deepCopy(user);
   activeUser.isActive = true;
   activeUser.createdAt = Date.now();
   console.log(activeUser);

   for (let i = 0; i < activeUser.socialProfiles.length; i++) {
      const socialProfile = activeUser.socialProfiles[i];
      delete socialProfile.image.sm;
      delete socialProfile.image.md;
      console.log("-----------------");
      console.log(activeUser.socialProfiles);
   }

   // otherwise show the social profiles
   console.log("-----------------");
   console.log(user.socialProfiles);

   // delete activeUser.socialProfiles[0].image.sm;
   // delete activeUser.socialProfiles[1].image.sm;
   // delete activeUser.socialProfiles[1].image.md;
});

/* functions start here */

// deep copy
function deepCopy(obj) {
   const str = JSON.stringify(obj);
   return safelyParseJson(str);
}
// to prevent crashing
function safelyParseJson(str) {
   try {
      JSON.parse(str);
   } catch {
      // if error return the original value
      return str;
   }
   return JSON.parse(str);
}

// email & pw error
// side effect functions jQuery
function showError(element, message) {
   $(`${element}-input`).addClass(`is-invalid`);
   $(`${element}-error`).html(message);
}

function hideError(element, message) {
   $(`${element}-input`).removeClass(`is-invalid`);
   $(`${element}-error`).html(message);
}
// padLeft for created at
function padLeft(str) {
   if (str.length < 2) {
      return `0` + str;
   } else {
      return str;
   }
}

// padStart for id
function padStart(num, width, char) {
   const numAsStr = String(num); //convert num to str to pad
   let padding = ``;
   // index less than width, pad the char
   for (let i = 0; i < width; i++) {
      padding += char; // += padding = padding + char (additional assignment operator)
   }
   const concattedStr = padding + numAsStr; // 000000 + 6

   if (numAsStr.length >= width) {
      console.log(`${numAsStr.length} is >= the width of ${width}`); // to make sure data isnt cut off
      return numAsStr; // return a string
   }
   const slicedStr = concattedStr.slice(-width); //generate padding then taking data from the right.
   return slicedStr; // returns a sliced string
}
// unique user id str
function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max + 1 - min) + min);
}
