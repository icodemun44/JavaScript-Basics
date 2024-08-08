let input = ["a", "b", "c"];

let output = input.filter((value, i) => {
  if (value === "a") {
    return true;
  } else if (value === "b") {
    return true;
  } else {
    return false;
  }
});

console.log(output);
