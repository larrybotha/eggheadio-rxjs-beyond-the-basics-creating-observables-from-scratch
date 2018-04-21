require('isomorphic-fetch');
const Rx = require('rxjs');

const log = (...args) => console.log(args.join());

const arr = [42, 100, 200];
const prom = fetch('https://null.jsbin.com').then(res => res.status);

function* myGen() {
  yield 42;
  yield 100;
  yield 200;
}

// Using the from operator we can take arrays, promises, and even iterators into
// Observables
const arrObs = Rx.Observable.from(arr);
const promObs = Rx.Observable.from(prom);

// By converting an iterator to an Observable it can now be used to push values
// instead of pulling values
const genObs = Rx.Observable.from(myGen());

[arrObs, promObs, genObs].map((o, i) => {
  o.subscribe(
    function onNext(x) {
      log(`obs ${i}`, x);
    },
    function onError(e) {
      log('something wrong inside Observable', e);
    },
    function onComplete() {
      log('done');
    }
  );
  log('\n');
});
