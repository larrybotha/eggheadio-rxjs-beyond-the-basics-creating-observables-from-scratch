const Rx = require('rxjs');

const log = (...args) => console.log([...args]);

const foo = Rx.Observable.create(obs => {
  let i = 0;
  const id = setInterval(() => {
    obs.next(i);
    i = i + 1;
  }, 500);

  return function unsubscribe() {
    clearInterval(id);
  };
});

// subscribing to an Observable returns a subscription object which allows for
// one to unsubscribe from the observable
const subscription = foo.subscribe({
  next(x) {
    log(x);
  },
  error(e) {
    log('something wrong inside', e);
  },
  complete() {
    log('done');
  },
});

setTimeout(() => {
  subscription.unsubscribe();
}, 4500);
