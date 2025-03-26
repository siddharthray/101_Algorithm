class Counter {
    constructor() {
        if (typeof Counter.instance === 'object') {
            return Counter.instance;
        }
        this.count = 0;
        Counter.instance = this;
        return this;
    }
    
    increment() {
        this.count += 1;
        console.log(this.count);
    }

    decrement() {
        this.count -= 1
        console.log(this.count);
    }

    getCount() {
        console.log(this.count);
    }
}

const counter1 = new Counter();
counter1.increment();
counter1.increment();
counter1.increment();

const counter2 = new Counter();
counter2.decrement();

console.log(counter2.getCount());
console.log(counter1 === counter2);