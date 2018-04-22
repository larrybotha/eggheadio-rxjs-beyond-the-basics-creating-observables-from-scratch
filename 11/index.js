const Rx = require('rxjs');

const log = (...args) => console.log([...args]);

const foo = Rx.Observable.create(observer => {});

foo.subscribe(
  function onNext(x) {
    log(x);
  },
  function onError(e) {
    log('something wrong inside', e);
  },
  function onComplete() {
    log('done');
  }
);
