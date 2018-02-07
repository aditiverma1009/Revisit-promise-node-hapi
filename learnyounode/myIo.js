const fs = require('fs');

const readFile = (argFile) => {
  const fileBuf = fs.readFileSync(argFile);
  const fileString = fileBuf.toString();
  const linesArr = fileString.split('\n');
  console.log(linesArr.length - 1);
};

readFile(process.argv[2]);
