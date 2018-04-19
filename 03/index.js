const Rx = require('rxjs');

const log = (...args) => console.log(args.join());

function foo() {
  console.log('Hello');

  return 42;
}

log(foo.call());
log('\n');

// An Observable is a producer of values
// The difference with Observables and generators is that the Observable
// determines when values are sent, whereas with generators the iterator created
// from a generator determines when a value is sent
// Observables utilise a PUSH style
const bar = Rx.Observable.create(observer => {
  log('Hello');

  observer.next(42);
  observer.next(100);
  observer.next(200);
  observer.next(300);

  setTimeout(() => {
    observer.next(400);
  }, 500);
});

// A subscriber is a consumer of values
bar.subscribe(x => log('from observable', x));
log('\n');

// Observables are similar to generators - a generator can emit multiple values
// Like an Observable, a generator won't emit anything until an iterator is
// created, and next is called on that iterator
// A generator is a producer of values
//
function* myGen() {
  log('Hello');

  yield 42;
  yield 100;
  yield 200;
  yield 300;
}

// an iterator is a consumer of values
// Iterators determine when a value is obtained, in contrast to subscribers.
// Iterators and generators utilise a PULL strategy to obtain values
const myIterator = myGen();
log(myIterator.next().value);
log(myIterator.next().value);
log(myIterator.next().value);
log(myIterator.next().value);
