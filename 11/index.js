const Rx = require('rxjs');

const log = (...args) => console.log([...args]);

const subscribe = observer => {
  observer.next(42);
  observer.next(100);
  observer.next(200);
  observer.complete();
};

const observer = {
  next(x) {
    log(x);
  },
  error(e) {
    log('something wrong inside', e);
  },
  complete() {
    log('done');
  },
};

// this is basically what Rx.Observable.create does
const foo = new Rx.Observable(subscribe);

// and this is basically what subscribe does
foo.subscribe(observer);
