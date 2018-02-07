const promiseResolve = Promise.resolve('FULFILLED!');
const promiseReject = Promise.reject(new Error('error'));

//   function onReject(errData) {
//     console.log(errData.message);
//   }

function onResolve(realData) {
  console.log(realData);
}
promiseReject.catch(err => console.log(err.message));
promiseResolve.then(data => `${data}aditi`).then(onResolve);

