const promise = new Promise((fulfill, reject) => {
  const err = new Error('REJECTED!');
  //   reject(err);
  setTimeout(() => reject(err), 300);
});


function onReject(errData) {
  console.log(errData.message);
}

function onResolve(realData) {
  console.log(realData);
}

promise.then(onResolve, onReject);
