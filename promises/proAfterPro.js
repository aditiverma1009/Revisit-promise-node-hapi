

/* global first, second */

let firstPromise = first();

let secondPromise = firstPromise.then((val) => {
  return second(val);
});

secondPromise.then(console.log);

// As an alternative to the code above, you could also do this:
// first().then(second).then(console.log);
