const Rx = require('rxjs');

const log = (...args) => console.log(args.join());

// Instead of manually creating the Observable, like this...
// const bar = Rx.Observable.create(observer => {
//   observer.next(42);
//   observer.next(100);
//   observer.next(200);
// });

// we can use a creation operator:
const bar = Rx.Observable.of(42, 100, 200);

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
