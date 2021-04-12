// const numbers = [1, 3, -6, -4, 3, -6, 2];

// // function filter(numbers, fn) {
// //   const result = [];
// //   for (const e of numbers) {
// //     if (fn(e)) {
// //       result.push(e);
// //     }
// //   }
// //   return result;
// // }

// console.log(numbers.filter((e) => e < 0).map((e) => Math.abs(e)));

// const address = {
//   street: "Somewhere",
//   city: "Budapest",
// };
// console.log(address.city);

import { add, multiply } from "./math.js";
import faker from "faker";

console.log(add(10, 32));
console.log(multiply(6, 7));
console.log(faker.name.findName());
