const Rx = require('rxjs');

const log = (...args) => console.log(args.join());

const bar = Rx.Observable.from([42, 100, 200]);

bar.subscribe(
  function onNext(x) {
    log('from observable', x);
  },
  function onError(e) {
    log('something wrong inside Observable', e);
  },
  function onComplete() {
    log('done');
  }
);
log('\n');
