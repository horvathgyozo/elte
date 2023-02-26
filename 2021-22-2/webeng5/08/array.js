const numbers = [23, 54, 23, -34, 4, -4];

// function filter(arr, fn) {
//   const result = [];
//   for (const e of arr) {
//     if (fn(e)) {
//       result.push(e);
//     }
//   }
//   return result;
// }

// console.log( filter(numbers, e => e < 0) );
console.log( numbers.filter(e => e < 0).map(e => Math.abs(e)) );