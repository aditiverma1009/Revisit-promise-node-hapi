const alwaysThrows = () => { throw new Error('OH NOES'); };
const iterate = (intArg) => {
  console.log(`${intArg}`);
  return intArg + 1;
};
function actionFunction() {
  const pro = Promise.resolve(iterate(1)).then();
  pro.then(varvalue => iterate(varvalue))
    .then(varvalue => iterate(varvalue))
    .then(varvalue => iterate(varvalue))
    .then(varvalue => iterate(varvalue))
    .then(alwaysThrows)
    .then(varvalue => iterate(varvalue))
    .then(varvalue => iterate(varvalue))
    .then(varvalue => iterate(varvalue))
    .then(varvalue => iterate(varvalue))
    .then(varvalue => iterate(varvalue))
    .catch(err => console.log(err.message));
  return pro;
}

actionFunction();
