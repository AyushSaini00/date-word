// test cases

import dateWord from "./index.js";

// console.log(
//   dateWord(`18. Dezember 2021`, {
//     is: "de",
//     to: "en",
//   })
// );

console.log(
  dateWord(`18 décembre 2021`, {
    is: "fr",
    format: "isoString",
  })
);
