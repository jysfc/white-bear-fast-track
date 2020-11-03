const dbUsers = [
   {
      id: "003498",
      email: "martin@gmail.com",
      password: "D9729FEB74992CC3482B350163A1A010",
      createdAt: 1601323030959,
      isActive: true,
   },
   {
      id: "112076",
      email: "abigail@gmail.com",
      password: "D58E3582AFA99040E27B92B13C8F2280",
      createdAt: 1601323566304,
      isActive: true,
   },
   {
      id: "099001",
      email: "dani@gmail.com",
      password: "73A90ACAAE2B1CCC0E969709665BC62F",
      createdAt: 1601323616825,
      isActive: true,
   },
   {
      id: "003498",
      email: "martin@gmail.com",
      password: "D9729FEB74992CC3482B350163A1A010",
      createdAt: 1601323030959,
      isActive: true,
   },
];

// var mostRecentSignUpDate = 0;
// dbUsers.forEach((newestUser) => {
//    Math.max(...dbUsers.createdAt);
//    console.log(newestUser);
// });

// using find
const mostRecentSignUp = dbUsers.find((dbUser) => {
   return Math.max(dbUser.createdAt);
});
// console.log(mostRecentSignUp);

// findindex of dupe
const dupeUserIndex = dbUsers
   .map((dbUser) => {
      return dbUser.id;
   })
   .findIndex((id, i, arr) => {
      return arr.indexOf(id) !== i;
   });

console.log("Remove this: ", dbUsers[dupeUserIndex]);

// filter to remove dupe
uniqDbUsers = dbUsers.filter((dbUser) => {
   return dbUser.indexOf === dupeUserIndex;
});
console.log(uniqDbUsers);
