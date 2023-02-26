import { readFileSync, readFile, writeFile } from "fs";
import { promisify } from "util";

// console.log(1); // us
// const data = readFileSync('./async.js'); // slow
// console.log(2);
// console.log(3);

// console.log(1); // us
// readFile('./async.js', function (err, data) { // slow
//   let content = data.toString();
//   content += '\n// my new comment added';
//   writeFile('./async.js', content, function (err) { // slow
//     console.log('finished writing');
//   })
//   console.log('finished reading')
// });
// console.log(2);
// console.log(3);

// function pReadFile(filename) {
//   return new Promise(function (resolve, reject) {
//     readFile(filename, function (err, data) {
//       if (err) reject(err)
//       else resolve(data)
//     })
//   })
// }

// console.log(1);
// pReadFile('./async.js')
//   .then(data => console.log(data.toString()))
//   .then(() => console.log(2))
//   .then(() => console.log(3))

const pReadFile = promisify(readFile);
const pWriteFile = promisify(writeFile);

async function start() { 
  console.log(1);
  let content = await pReadFile('./async.js');
  content += '\n// my new comment added';
  await pWriteFile('./async.js', content);
  console.log(2);
  console.log(3);
}
start();
// my new comment added
// my new comment added
// my new comment added
// my new comment added