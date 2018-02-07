const fs = require('fs');

const fileLength = (argFile) => {
  fs.readFile(argFile, (err, data) => {
    if (err) {
      console.log(err);
    }
    const fileString = data.toString();
    const linesArr = fileString.split('\n');
    console.log(linesArr.length - 1);
  });
};

fileLength(process.argv[2]);
