// function calculate(operation, a, b) {
//   console.log(operation(a, b));
// }

// const add = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const mul = (a, b) => a * b;
// const div = (a, b) => a / b;

// calculate(add, 10, 5);
// calculate(sub, 10, 5);
// calculate(mul, 10, 5);
// calculate(div, 10, 5);

console.log("start");

setTimeout(function () {
  console.log("Queued task emitted");
}, 0);

console.log("End");
