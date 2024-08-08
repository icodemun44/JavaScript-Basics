// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.
// Example 1:
// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65

//method 1
let fun1 = (funclist, num) => {
  funclist.reverse();
  for (let i = 0; i < funclist.length; i++) {
    num = funclist[i](num);
    console.log(num)
  }
  
};

fun1([(x) => x + 1, (x) => x * x, (x) => 2 * x], 4)

//method 2
let func2 = (ar1, num) => {
    let output = ar1.reverse().reduce((pre,cur) => {
        let value = cur(pre);
        console.log(value);
        return value
    },num)
}

func2([(x) => x + 1, (x) => x * x, (x) => 2 * x], 4)