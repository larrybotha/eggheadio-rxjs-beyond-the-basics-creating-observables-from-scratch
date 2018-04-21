const log = (...args) => console.log(args.join());

function addEventHandler(handler) {
  document.addEventListener('click', handler);
}

function removeEventHandler(handler) {
  document.removeEventListener('click', handler);
}

// const foo = fromEventPattern(addEventHandler, removeEventHandler);

// Rx.Observable.fromEventPattern can be used to subscribe to both DOM event
// streams and Node event streams
const foo1 = Rx.Observable.fromEventPattern(
  addEventHandler,
  removeEventHandler
);

// we can manually implement a basic fromEventPattern like so:
function fromEventPattern(add, remove) {
  // create an observable
  return Rx.Observable.create(observer => {
    // every time we receive an event, push that event onto the stream
    add(ev => observer.next(ev));
  });
}

// There's also fromEvent, which is specifically for creating Observables from
// DOM events
const foo2 = Rx.Observable.fromEvent(document, 'click');

[foo1, foo2].map((o, i) =>
  o.subscribe(
    function onNext(x) {
      log(`from ${i}`, x);
    },
    function onError(e) {
      log('something wrong inside Observable', e);
    },
    function onComplete() {
      log('done');
    }
  )
);
