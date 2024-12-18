function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Incorrect: should handle other falsy values
  }
  return a + b;
}

console.log(foo(0, 1)); // Correctly returns 0
console.log(foo(1, 0)); // Correctly returns 0
console.log(foo(null, 1)); // Incorrectly returns NaN
console.log(foo(1, false)); // Incorrectly returns NaN