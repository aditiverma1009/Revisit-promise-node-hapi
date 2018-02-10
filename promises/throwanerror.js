// const onReject = (data) => { };
const parsePromised = () => {
  const arg1 = process.argv[2];
  const promise = new Promise((resolve, reject) => {
    JSON.parse(arg1);
    const err = new Error('rejected ');
    reject(err);
  });

  promise.then()
    .then(null, err => console.log(err.message));
  return promise;
};
parsePromised();
module.exports = parsePromised;
