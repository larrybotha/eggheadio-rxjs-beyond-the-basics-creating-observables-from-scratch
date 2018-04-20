const Rx = require('rxjs');

const log = (...args) => console.log(args.join());

function foo() {
  console.log('Hello');

  // throwing an error in a function
  throw new Error('invalid something');

  return 42;
}

try {
  log(foo.call());
} catch (e) {
  console.log('something wrong happened inside function call', e);
}
log('this still runs because we caught the error');
log('\n');

const bar = Rx.Observable.create(observer => {
  // not handled inside the Observable, but handled inside the subscriber
  observer.error(new Error('1. something happened'));

  // wrap execution inside try-catch block
  try {
    observer.next(42);
    observer.next(100);
    observer.next(200);
    observer.next(300);

    setTimeout(() => {
      observer.next(400);
    }, 500);
  } catch (e) {
    // throw an error from within the Observable
    observer.error(new Error('2. something happened'));
  }
});

bar.subscribe(
  function onNext(x) {
    log('from observable', x);
  },
  // this allows us to handle exceptions not caught inside the Observable
  function onError(e) {
    console.log('something wrong inside Observable', e);
  }
);
log('\n');
log('continue executing here');
