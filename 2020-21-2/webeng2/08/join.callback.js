import fs from "fs";

fs.readdir("./input", (err, filenames) => {
  const contents = [];
  for (const filename of filenames) {
    fs.readFile(`./input/${filename}`, (err, content) => {
      contents.push(content.toString());
      if (contents.length === filenames.length) {
        const output = contents.join("\n");
        fs.writeFile("./out.txt", output, (err) => {
          console.log("The end");
        });
      }
    });
  }
});
