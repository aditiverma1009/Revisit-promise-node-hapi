const fs = require('fs');
const path = require('path');


const forReadingFile = (extFile) => {
  fs.readFile(extFile, (err, data) => {
    if (err) {
      console.log(err);
    }
    const fileString = data.toString();
    const linesArr = fileString.split('\n');
    console.log(linesArr.length - 1);
  });
};

const dirFiles = (argDir, fileExt) => {
  fs.readdir(argDir, (err, fileArr) => {
    if (err) {
      console.log(err);
    }
    // console.log(argDir);
    // console.log(fileExt);

    const fileExtList = fileArr.filter(fileName => path.extname(fileName) === `.${fileExt}`);
    for (let i = 0; i < fileExtList.length; i += 1) {
      console.log(fileExtList[i]);
      forReadingFile(fileExtList[i]);
    }
  });
//   console.log('a');
};

dirFiles(process.argv[2], process.argv[3]);

