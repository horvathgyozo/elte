import { readFileSync, readFile } from "fs";
import { promisify } from "util";

// synchrony
// console.log(1);
// const file = readFileSync('./timer.js');
// console.log(file.toString());
// console.log(3);

// // asynchrony
// console.log(1);
// const file = readFile('./timer.js', (err, data) => {
//   console.log(2);
// });
// console.log(3);

// asynchrony
// const pReadFile = function(filename) {
//   return new Promise((resolve, reject) => {
//     readFile(filename, (err, data) => {
//       if (err) reject(err)
//       else resolve(data);
//     });
//   });
// }
const pReadFile = promisify(readFile);
// console.log(1);
// pReadFile('./timer.js')
//   .then(data => console.log(2))
//   .then(() => console.log(3))

async function start() {
  console.log(1);
  const file = await pReadFile('./timer.js');
  console.log(file.toString());
  console.log(3);
}
start();