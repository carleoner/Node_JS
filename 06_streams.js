const fs = require("fs");

//create stream
//encoding: "utf8" is an option to stream in readable form
const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");

readStream.on("data", (chunk) => {
  // console.log('---- NEW CHUNK ----');
  // console.log(chunk);
  writeStream.write("\nNEW CHUNK:\n");
  writeStream.write(chunk);
});

// piping
// readStream.pipe(writeStream);
