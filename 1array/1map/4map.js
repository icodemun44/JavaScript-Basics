let input = [1, 3, 4, 7];

let output = input.map((value, i) => {
  if (value % 2 === 0) {
    return value * 0;
  } else {
    return value * 100;
  }
});

console.log(output)
