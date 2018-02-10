const pr = first();
const pr2 = pr.then(val => second(val));
pr2.then(console.log);
