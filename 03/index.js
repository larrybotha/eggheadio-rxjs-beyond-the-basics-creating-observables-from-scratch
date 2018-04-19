const Rx = require('rxjs');

function foo() {
  console.log('Hello');

  return 42;
}

console.log(foo.call());

const bar = Rx.Observable.create(observer => {
  console.log('Hello');

  observer.next(42);
  observer.next(100);
  observer.next(200);
  observer.next(300);

  setTimeout(() => {
    observer.next(400);
  }, 500);
});

bar.subscribe(x => console.log(x));
