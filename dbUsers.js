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

// const dbUsers = ["003498", "112076", "099001", "003498"];

var mostRecentSignUpDate = 0;
dbUsers.forEach((newestUser) => {
   if (newestUser.createdAt > mostRecentSignUpDate) {
      mostRecentSignUpDate = newestUser.createdAt;
   }
   return mostRecentSignUpDate;
   //    Math.max(...dbUsers.createdAt);
});
console.log(`using forEach:`, mostRecentSignUpDate);

// using find to get user
const mostRecentSignUp = dbUsers.find((user) => {
   return user.createdAt === mostRecentSignUpDate;
});
console.log(`using find to locate user:`, mostRecentSignUp);

// .find((dbUser) => {
//     //   return Math.max(dbUser.createdAt);
// });

// findindex of dupe
const dupeUserIndex = dbUsers
   .map((dbUser) => {
      return dbUser.id;
   })
   .findIndex((id, i, arr) => {
      return arr.indexOf(id) !== i;
   });

console.log("Remove this dupe: ", dbUsers[dupeUserIndex]);

// filter to remove dupe
const uniqDbUsers = dbUsers.filter((user, i, arr) => {
   return arr.indexOf(user) !== dupeUserIndex;
});
console.log(uniqDbUsers);
