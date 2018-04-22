const Rx = require('rxjs');

const log = (...args) => console.log([...args]);

const foo = Rx.Observable.empty();

foo.subscribe(
  function onNext(x) {
    log(`obs ${k}`, x);
  },
  function onError(e) {
    log(`something wrong inside ${k}`, e);
  },
  function onComplete() {
    log(`${k} done`);
  }
);
