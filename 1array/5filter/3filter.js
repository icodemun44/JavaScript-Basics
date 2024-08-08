//to seperate string from number in arrays

let input = [3, 4, "b", "z", 8];

let output = input.filter((value, i) => {
  if (typeof(value) === "string") {
    return true;
  } else {
    return false;
  }
});

console.log(output);
