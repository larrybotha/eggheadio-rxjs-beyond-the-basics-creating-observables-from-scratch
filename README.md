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

    ```bash
    $ nodemon 04
    ```
