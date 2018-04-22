# RxJS Beyond the Basics: Creating Observables from scratch

Learning and annotations from https://egghead.io/courses/rxjs-beyond-the-basics-creating-observables-from-scratch

1. Introduction

2. [Return multiple values from Observable in RxJS](./02/index.js)

    Takeaways:

    Observables differ from function calls primarily in their ability to emit
    multiple values, whereas a function can only ever return a single value when
    called.

    ```bash
    $ nodemon 02
    ```
3. [Push values from Observables](./03/index.js)

    Takeaway:

    Observables utilise a PUSH strategy for values - subscribers receive values
    when the Observable emits them.

    This is in contrast to generators which utilise a PULL strategy. Iterators
    determine when a value is obtained, and the generator simply provides that
    value.

    ```bash
    $ nodemon 03
    ```
4. [Throw errors with Observables](./04/index.js)

    Takeaways:

    A subscriber has 3 callbacks, of which the second is on `onError` callback
    allowing one to handle exceptions not caught inside the Observable.

    If you have control over the Observable, then you can use a try-catch block
    inside the Observable.

    ```bash
    $ nodemon 04
    ```
5. [Perform an action on completion](./05/index.js)

    Takeaways:

    An Observable can be made to stop emitting events by executing its
    `complete` instance method. This is important if one Observable needs to
    take over from another, and is waiting for a _last_ event.

    All an Observable can do is:

    1. deliver values
    2. deliver errors
    3. notify completion

    ```bash
    $ nodemon 05
    ```
6. [Deliver synchronous values with the `of` operator](./06/index.js)

    Takeaways:

    `Observable.of` is a creation operator allowing one to create an Observable
    from a list of values.

    ```bash
    $ nodemon 06
    ```
7. [Convert Javascript values to Observables](./07/index.js)

    Takeaways:

    `Rx.Observable.from` can be used to create Observables from arrays,
    Promises, and iterators.

    Converting an iterator into an Observable changes the strategy from pull to
    push.

    ```bash
    $ nodemon 07
    ```
8. [Convert DOM and Node.js streams to Observable with `fromEvent`](./08/index.js)

    Takeaways:

    `Rx.Observable.fromEventPattern` can be used to create Observables from both
    DOM events and Node event streams.

    `Rx.Observable.fromEvent` is excusively for DOM events.

    ```bash
    $ npx live-server 08
    ```
9. [Combine empty, never, and throw operators with Observables](./09/index.js)

    Takeaways:

    `empty`, `never`, and `throw` are convenience functions for creating useful
    Observables without having to use `Rx.Observable.create`.

    ```bash
    $ nodemon 09
    ```
10. [Intervals with interval and timer operators](./10/index.js)

    Takeaways:

    `interval` emits an event every n milliseconds.

    `timer` waits for a specified amount of time before emitting an event every
    n milliseconds.

    ```bash
    $ nodemon 10
    ```
