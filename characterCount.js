$(`#imagery-input`).keyup(function () {
   // get the text from textarea
   const text = $(`#imagery-input`).val(); // data type = string
   console.log(`The user inputted: ${text}`);

   // check the length of the text
   const textLength = text.length;
   console.log(`total inputted chars: ${textLength}`);

   // update the character counter on the page
   $(`#imagery-char-count`).html(textLength);

   // if text length is equal/less than 240, greater than 0
   if (text.length <= 240 && text.length > 0) {
      $(`#save-card`).removeClass(`disabled`);
      $(`#imagery-char-count`).removeClass(`text-danger`);

      // if text length is zero or greater than 240
   } else if (text.length > 240) {
      // add disabled class to save btn
      $(`#save-card`).addClass(`disabled`);
      $(`#imagery-char-count`).addClass(`text-danger`);
   } else if (text.length === 0) {
      // remove disabled class to save btn
      $(`#save-card`).addClass(`disabled`);
      $(`#imagery-char-count`).removeClass(`text-danger`);
   }
});

// answer characters count
$(`#answer-input`).keyup(function () {
   // get the text from textarea
   const text = $(`#answer-input`).val();
   console.log(`The user inputted: ${text}`);

   // check the length of the text
   const textLength = text.length;
   console.log(`total inputted chars: ${textLength}`);

   // update the character counter on the page
   $(`#answer-char-count`).html(textLength);

   // if the text is acceptable
   // if text length is equal/less than 240, greater than 0
   if (text.length <= 240 && text.length > 0) {
      $(`#next`).removeClass(`disabled`);
      $(`#answer-char-count`).removeClass(`text-danger`);

      // if text length is zero or greater than 240
   } else if (text.length > 240) {
      // add disabled class to save btn
      $(`#next`).addClass(`disabled`);
      $(`#answer-char-count`).addClass(`text-danger`);
   } else if (text.length === 0) {
      // add disabled class to save btn
      $(`#next`).addClass(`disabled`);
      $(`#answer-char-count`).removeClass(`text-danger`);
   }
});

// all card edit characters count
$(`#top-edit-input, #bottom-edit-input`).keyup(function () {
   // get the text from textarea
   const topInput = $(`#top-edit-input`).val();
   const bottomInput = $(`#bottom-edit-input`).val();

   // update the character counter on the page
   $(`#top-edit-char-count`).html(topInput.length);
   $(`#bottom-edit-char-count`).html(bottomInput.length);

   // if the text is acceptable
   // if text length is equal/less than 240, equal/greater than 0
   if (topInput.length <= 240 && topInput.length >= 0) {
      // remove text danger class to char counter
      $(`#top-edit-char-count`).removeClass(`text-danger`);
   } else {
      // else it is not acceptable
      $(`#top-edit-char-count`).addClass(`text-danger`);
   }

   // if text length is equal/less than 240, equal/greater than 0
   if (bottomInput.length <= 240 && bottomInput.length >= 0) {
      // remove text danger class to char counter
      $(`#bottom-edit-char-count`).removeClass(`text-danger`);
   } else {
      $(`#bottom-edit-char-count`).addClass(`text-danger`);
   }

   // if text length is zero or greater than 240
   if (
      topInput.length > 0 &&
      topInput.length <= 240 &&
      bottomInput.length > 0 &&
      bottomInput.length <= 240
   ) {
      $(`#edit-save`).removeClass(`disabled`);
   } else {
      // add disabled class to save btn
      $(`#edit-save`).addClass(`disabled`);
   }
});
