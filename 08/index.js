const Rx = require('rxjs');

const log = (...args) => console.log(args.join());

const arr = [42, 100, 200];

const arrObs = Rx.Observable.from(arr);

arrObs.subscribe(
  function onNext(x) {
    log(`arrObs`, x);
  },
  function onError(e) {
    log('something wrong inside Observable', e);
  },
  function onComplete() {
    log('done');
  }
);
