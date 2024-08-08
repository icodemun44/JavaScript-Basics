//foreach for returning array value in individual element form seperately instead of arrays
//works same like map but instead of making output in different variable it rewrites the array of initial variable
let input = [1, 3, 4];

input.forEach((value, i) => {
  console.log(value * i);
});
