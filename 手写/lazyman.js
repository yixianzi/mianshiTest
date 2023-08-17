class LazyMan {
  constructor(name) {
    this.name = name;
    this.queue = [];
    this.queue.push(() => {
      console.log("Hi! This is " + name + "!");
      this.next();
    });
    setTimeout(() => {
      this.next();
    }, 0);
  }
  eat(food) {
    this.queue.push(() => {
      console.log(`${this.name} ${food}`);
      this.next();
    });
    return this;
  }
  next() {
    if (this.queue.length > 0) {
      const f = this.queue.shift();
      f();
    }
  }
  sleep(time) {
    this.queue.push(() => {
      setTimeout(() => {
        console.log(`sleep ${time}s`);
        this.next();
      }, time * 1000);
    });
    return this;
  }
}

new LazyMan("Hank").sleep(1).eat("dinner");
