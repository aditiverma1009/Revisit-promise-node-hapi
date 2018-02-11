// const bl = require('bl');
const http = require('http');
// const fs = require('fs');

const responseData = () => {
  const url1 = process.argv[2];
  const url2 = process.argv[3];
  const url3 = process.argv[4];
  const newPromise1 = new Promise((resolve) => {
    let rawData = '';
    http.get(url1, (res) => {
      res.setEncoding('utf8');
      res.on('data', (chunks) => {
        rawData += chunks;
      });
      res.on('end', () => resolve(rawData));
    }).on('error', () => resolve('error1'));
  });
  const newPromise2 = new Promise((resolve) => {
    let rawData = '';
    http.get(url2, (res) => {
      res.setEncoding('utf8');
      res.on('data', (chunks) => {
        rawData += chunks;
      });
      res.on('end', () => resolve(rawData));
    }).on('error', () => resolve('error2'));
  });
  const newPromise3 = new Promise((resolve) => {
    let rawData = '';
    http.get(url3, (res) => {
      res.setEncoding('utf8');
      res.on('data', (chunks) => {
        rawData += chunks;
      });
      res.on('end', () => resolve(rawData));
    }).on('error', () => resolve('error3'));
  });
  Promise.all([newPromise1, newPromise2, newPromise3]).then((values) => {
    console.log(values[0]);
    console.log(values[1]);
    console.log(values[2]);
  });
  return true;
};
responseData();
module.exports = responseData;
/* other solution---

  var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }

          results[index] = data.toString()
          count++

          if (count === 3) {
            printResults()
          }
        }))
      })
    }

    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }

    */
