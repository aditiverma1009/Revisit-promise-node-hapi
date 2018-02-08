const bl = require('bl');
const http = require('http');
// const fs = require('fs');

const responseData = (url) => {
  http.get(url, (response) => {
    let respContent = '';
    response.pipe(bl((err, data) => {
      if (err) { console.log(err.message); } else {
        respContent = data.toString();
      }
    }));
    response.on('end', () => console.log(`${respContent.length}\n${respContent}`));
    // res.setEncoding('utf8');
  });
};
responseData(process.argv[2]);
module.exports = responseData;
