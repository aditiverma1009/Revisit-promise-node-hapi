const attachTitle = arg1 => `DR. ${arg1}`;

const promise1 = new Promise((resolve) => {
  resolve('MANHATTAN');
});

promise1.then(attachTitle).then(console.log);
