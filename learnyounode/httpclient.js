const http = require('http');

function getChunks() {
  const url = process.argv[2];
  http.get(url, (res) => {
    res.setEncoding('utf8');
    res.on('data', (chunks) => {
      console.log(chunks);
    // rawData += chunks;
    });
  }).on('error', error => console.log(error.message));
}
getChunks();
module.exports = getChunks;
