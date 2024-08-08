let list = [1, 2, 3, 4];

let a = list.reduce((pre, cur) => {
  return pre*cur;
}, 1);

console.log(a)