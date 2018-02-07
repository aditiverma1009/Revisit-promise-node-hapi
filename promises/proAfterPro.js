const promiseResolve = new Promise(resolve,reject){
    
}

function onResolve(realData) {
  console.log(realData);
}
promiseReject.catch(err => console.log(err.message));
promiseResolve.then(data => `${data}aditi`).then(onResolve);

