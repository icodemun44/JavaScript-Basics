//how to use map on array

let list = ["a", "b"];

let list1 = list.map((value, i) => {
  return `${value}${i}`;
});

console.log(list1);
