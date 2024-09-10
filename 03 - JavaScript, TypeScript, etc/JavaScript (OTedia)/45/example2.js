//// Counter Function
function* myCounter(start = 1) {
  let i = start;
  while (true) {
    yield i++;
  }
}
const counter = myCounter(4);
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());

//// Fibonacci Numbers
//// 1 , 2 , 3 , 5 , 8 , 13 , 21 , 34 , 55 , 89
function* fibonacci(a, b) {
  let [prev, current] = [a, b];
  while (true) {
    [prev, current] = [current, prev + current];
    yield current;
  }
}
const sequence1 = fibonacci(1, 2);
console.log(sequence1.next().value);
console.log(sequence1.next().value);
console.log(sequence1.next().value);

const sequence2 = fibonacci(2, 7);
console.log(sequence2.next().value);
console.log(sequence2.next().value);
console.log(sequence2.next().value);
