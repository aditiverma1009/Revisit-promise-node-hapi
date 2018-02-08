//unresolved
const promise=new Promise(resolve,reject){
    resolve('I FIRED');
    reject('I DID NOT FIRE');
}

function onRejected(){
    const err=new Error('error');
    console.log(er);
}
promise.then(console.log,onRejected);