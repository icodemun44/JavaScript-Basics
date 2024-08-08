//for odd positions multiplication

let input = [1, 4, 3, 9];

let output = input.map((value, i) => {
  if (i % 2 === 0) {
    return value * 100;
  } else {
    return value * 0;
  }
});

console.log(output)