//to find the first value that meets the specific condition and return the value in element of array

let input = [1, 2, 3, 4, 5];

let output = input.find((value, i) => {
  if (value > 3) {
    return true;
  } else {
    return false;
  }
});
{
}
console.log(output);
