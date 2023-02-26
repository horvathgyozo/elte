import { readFileSync, readFile } from "fs";
import { promisify } from "util";

const pReadFile = promisify(readFile);

// console.log(1);
// // const data = readFileSync('./async.js');
// // readFile('./async.js', (err, data) => {
// //   console.log(data.toString());
// // })
// pReadFile('./async.js')
//   .then(data => console.log(data.toString()))
//   .then(() => console.log(3))

async function start() {
  console.log(1);
  const data = await pReadFile('./async.js')
  console.log(data.toString());
  console.log(3);
}
start()