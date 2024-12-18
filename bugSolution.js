function foo(a, b) {
  if (!a || !b) {
    return 0; // Correctly handles falsy values
  }
  return a + b;
}

console.log(foo(0, 1)); // Correctly returns 0
console.log(foo(1, 0)); // Correctly returns 0
console.log(foo(null, 1)); // Correctly returns 0
console.log(foo(1, false)); // Correctly returns 0
console.log(foo(1, "")); // Correctly returns 0
console.log(foo(1, undefined)); // Correctly returns 0