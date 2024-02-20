import { readdir, readFile } from 'node:fs/promises';

const files = await readdir("./files")
let texts = [];
for (const filename of files) {
  const content = await readFile(`./files/${filename}`);
  texts.push(content);
}
console.log(texts.join("\n"));


// readdir("./files", function (err, files) {
//   let i = 0;
//   const texts = [];
//   for (const filename of files) {
//     readFile(`./files/${filename}`, function (err, file) {
//       i++;
//       texts.push(file.toString());
//       if (i === files.length) {
//         console.log(texts.join(""));
//       }
//     });
//   }
// })