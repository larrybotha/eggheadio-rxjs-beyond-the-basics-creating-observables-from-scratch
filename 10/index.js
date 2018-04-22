const Rx = require('rxjs');

const log = (...args) => console.log([...args]);

// Rx.Observable.interval is a convenience operator for the following:
// const intervalObs = Rx.Observable.create(observer => {
//   let v = 0;

//   setInterval(() => {
//     observer.next(v);
//     v = v + 1;
//   }, 1000);
// });
const intervalObs = Rx.Observable.interval(1000);

// timer allows us to start an interval after a specific start time
const timerObs = Rx.Observable.timer(3000, 1000);

const obsMap = {
  intervalObs,
  timerObs,
};

Object.keys(obsMap).map(k =>
  obsMap[k].subscribe(
    function onNext(x) {
      log(k, x);
    },
    function onError(e) {
      log(`something wrong inside ${k}`, e);
    },
    function onComplete() {
      log(k, 'done');
    }
  )
);
