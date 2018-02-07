const promise = new Promise((fulfill, reject) => {
  const err = new Error('error!');
  //   reject(err);
  setTimeout(() => fulfill('FULFILLED!'), 300);
});

function onReject(errData) {
  console.log(errData);
}

function onResolve(realData) {
  console.log(realData);
}

promise.then(onResolve, onReject);
