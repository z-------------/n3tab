import test from "ava";
import Timer from "../lib/timer";

const SLACK = 0.02; // proportional

test("Timer#once() works", t => {
    const INTERVAL = 500;
    const start = Date.now();
    return new Promise(resolve => {
        new Timer(() => {
            t.assert(Math.abs(Date.now() - start - INTERVAL) < SLACK * INTERVAL);
            resolve();
        }, INTERVAL).once();
    });
});

test("Timer#start() works", t => {
    const INTERVAL = 500;
    const COUNT = 3;
    const TOTAL_INTERVAL = COUNT * INTERVAL;
    const start = Date.now();
    let count = 0;
    return new Promise(resolve => {
        new Timer(() => {
            ++count;
            if (count === COUNT) {
                t.assert(Math.abs(Date.now() - start - TOTAL_INTERVAL) < SLACK * TOTAL_INTERVAL);
                resolve();
            }
        }, INTERVAL).start();
    });
});

test("Timer#doStart() works", t => {
    const INTERVAL = 500;
    const start = Date.now();
    let count = 0;
    return new Promise(resolve => {
        new Timer(() => {
            ++count;
            if (count === 2) {
                t.assert(Math.abs(Date.now() - start - INTERVAL) < SLACK * INTERVAL);
                resolve();
            }
        }, INTERVAL).doStart();
    });
});

test("Timer#stop works", t => {
    const INTERVAL = 500;
    let count = 0;
    return new Promise(resolve => {
        const timer = new Timer(() => {
            ++count;
        }, INTERVAL);
        timer.start();
        timer.stop();
        setTimeout(() => {
            t.is(count, 0);
            resolve();
        }, INTERVAL + SLACK * INTERVAL);
    });
});

test("Timer#stop warns if not started", t => {
    const INTERVAL = 500;
    return new Promise(resolve => {
        const timer = new Timer(
            () => { /* do nothing */ },
            INTERVAL
        );
        t.throws(() => {
            timer.stop();
        });
        resolve();
    });
});

test("Timer handles `this` properly", t => {
    class Foo {
        constructor(private resolve: Function) {}

        startTimer() {
            new Timer(this.method, 0, this).once();
        }

        private method() {
            t.assert(true);
            this.resolve();
        }
    }

    return new Promise(resolve => {
        const foo = new Foo(resolve);
        foo.startTimer();
    });
});
