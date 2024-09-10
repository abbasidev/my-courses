//// Iterators in for-of loops
function* fibonacci(a, b) {
  let i = 0;
  let [prev, current] = [a, b];
  while (true) {
    [prev, current] = [current, prev + current];
    yield current;
    i++;
    if (i > 20) {
      return;
    }
  }
}

let sequence = fibonacci(1, 2);
for (let n of sequence) {
  console.log(n);
}
