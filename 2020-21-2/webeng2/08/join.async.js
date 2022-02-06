import fs from "fs";
import { promisify } from "util";

const pReadDir = promisify(fs.readdir);
const pReadFile = promisify(fs.readFile);
const pWriteFile = promisify(fs.writeFile);

async function start() {
  const filenames = await pReadDir("./input");
  // const contents = [];
  // for (const filename of filenames) {
  //   const content = await pReadFile(`./input/${filename}`);
  //   contents.push(content.toString());
  // }
  const promises = [];
  for (const filename of filenames) {
    promises.push(pReadFile(`./input/${filename}`, "utf-8"));
  }
  const contents = await Promise.all(promises);
  const output = contents.join("\n");
  await pWriteFile("./out.txt", output);
  console.log("The end");
}
start();

// fs.readdir("./input", (err, filenames) => {
//   const contents = [];
//   for (const filename of filenames) {
//     fs.readFile(`./input/${filename}`, (err, content) => {
//       contents.push(content.toString());
//       if (contents.length === filenames.length) {
//         const output = contents.join("\n");
//         fs.writeFile("./out.txt", output, (err) => {
//           console.log("The end");
//         });
//       }
//     });
//   }
// });
