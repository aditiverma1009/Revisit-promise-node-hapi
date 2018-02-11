const fs = require('fs');
const path = require('path');

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
    }
  });
//   console.log('a');
};

dirFiles(process.argv[2], process.argv[3]);

