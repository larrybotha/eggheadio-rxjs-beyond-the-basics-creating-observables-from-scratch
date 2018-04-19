const Rx = require('rxjs');

function foo() {
  console.log('Hello');

  return 42;
}

// console.log(foo());
// all functions have a 'call' property
// Without calling a function nothing happens. This is the same as a stream -
// one can create a stream, but until it's subscribed to, nothing happens
console.log('before fn');
console.log(foo.call());
console.log('after fn');
console.log('\n');

// The above is analagous to the following in RxJS
const bar = Rx.Observable.create(observer => {
  console.log('Hello');

  observer.next(42);
  // the biggest difference between function calls and Observables is that an
  // Observable can emit multiple values
  // These are all emitted synchronously
  observer.next(100);
  observer.next(200);
  observer.next(300);

  // But we can also emit async:
  setTimeout(() => {
    observer.next(400);
  }, 500);
});

// Some people claim Observables are async. This is not necessarily the case -
// it depends on the implementation.
// Here we have an Observable executing synchronously
console.log('before observable');
bar.subscribe(x => console.log(x));
console.log('after observable');
