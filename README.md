# Incorrect Handling of Falsy Values in JavaScript

This repository demonstrates a common error in JavaScript: incorrectly handling falsy values.

The `foo` function is intended to add two numbers, but it only checks for strict equality (`===`) with 0.  This means that other falsy values like `null`, `undefined`, `false`, and the empty string (`''`) will cause unexpected behavior (NaN or incorrect results).

The bug is demonstrated in `bug.js` and the correct solution is provided in `bugSolution.js`.  The solution uses a more robust check to account for all falsy values.