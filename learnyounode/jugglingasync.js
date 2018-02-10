const bl = require('bl');
const http = require('http');
// const fs = require('fs');
const responseData = (url1, url2, url3) => {
  let promise1=new Promise(resolve){    
    http.get(url1, (response) => {
    let respContent = '';
    response.pipe(bl((err, data) => {
      if (err) { console.log(err.message); } else {
        respContent = data.toString();
      }
    }));
    response.on('end', () => resolve(respContent));
    // res.setEncoding('utf8');
  });
//   resolve('resolved!');
}
let promise2=new Promise(resolve){    
  http.get(url2, (response) => {
    let respContent = '';
    response.pipe(bl((err, data) => {
      if (err) { console.log(err.message); } else {
        respContent = data.toString();
      }
    }));
    response.on('end', () => resolve(respContent));
    // res.setEncoding('utf8');
  });
}
let promise3=new Promise(resolve){    
  http.get(url3, (response) => {
    let respContent = '';
    response.pipe(bl((err, data) => {
      if (err) { console.log(err.message); } else {
        respContent = data.toString();
      }
    }));
    response.on('end', () => resolve(respContent));
    // res.setEncoding('utf8');
  });
}
}
promiseAll().then(resolvedPromises);
console.log(resolvedPromises);
responseData(process.argv[2], process.argv[3], process.argv[4]);
module.exports = responseData;
