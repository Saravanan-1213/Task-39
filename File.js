// create File

// const fs = require("fs");

// const timeStamp = "2023-02-01 14:41:13";

// fs.writeFile("./ts.txt", timeStamp, (err) => {
//   console.log("Completed Writing");
// });

// TASK
// Content of the file should be current TimeStamp
// The File name should be current date-time.txt

const fs = require("fs");

const timeStamp = "Current TimeStamp = 2023-02-01 14:41:13 ";

for (let i = 1; i <= 10; i++) {
  fs.writeFile(
    `./Text File/feb 1 2023 - 08.23 pm ${i}.txt`,
    timeStamp,
    (err) => {
      console.log("Completed Wrirting");
    }
  );
}
