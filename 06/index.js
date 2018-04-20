const Rx = require('rxjs');

const log = (...args) => console.log(args.join());

const bar = Rx.Observable.create(observer => {
  try {
    log('Hello');
    observer.next(42);
    observer.next(100);
    observer.next(200);
    observer.next(300);

    setTimeout(() => {
      observer.next(400);
      observer.complete();
    }, 500);
  } catch (e) {
    observer.error(new Error(err));
  }
});

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
