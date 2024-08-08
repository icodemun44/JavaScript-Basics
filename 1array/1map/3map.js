let input = ["my", "name", "is"];

let output = input.map((value, i) => {
  let _output = `${value.toUpperCase()}N`;
  return _output;
});

console.log(output);
