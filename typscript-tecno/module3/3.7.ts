{
  // static
  class Counter {
    static count: number = 0;
    static increment() {
      return (Counter.count += 1);
    }
    static decrement() {
      return (Counter.count -= 1);
    }
  }
  const instance1 = new Counter();
  console.log(Counter.increment());
  //   console.log(instance1.increment());
  const instance2 = new Counter();
  //   console.log(instance2.increment());
  //
}
