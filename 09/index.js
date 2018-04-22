const Rx = require('rxjs');

const log = (...args) => console.log([...args]);

// create an empty Observable
const empty = Rx.Observable.empty();
// Rx.Observable.empty is equivalent to
// const empty = Rx.Observable.create(function(observer) {
//   observer.complete();
// });

// Useful as an infinite Observable, because it never completes itself, but it's
// still open for Obsersvables to be sent
const never = Rx.Observable.never();
// Rx.Observable.never s equivalent to
// const never = Rx.Observable.create(function(docker) {
//   // do nothing
// });

const throwObs = Rx.Observable.throw(new Error('thrown!'));
// Rx.Observable.throw is equivalent to
// const throwObs = Rx.Observable.create(function(observer) {
//   observer.error(new Error('thrown'));
// });

const obsMap = {
  empty,
  never,
  throwObs,
};

Object.keys(obsMap).map(k =>
  obsMap[k].subscribe(
    function onNext(x) {
      log(`obs ${k}`, x);
    },
    function onError(e) {
      log(`something wrong inside ${k}`, e);
    },
    function onComplete() {
      log(`${k} done`);
    }
  )
);
