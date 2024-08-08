//to find sum of all even numbers in array

let list = [1, 2, 3, 4, 5, 6, 7, 8];

let _list = list.filter((value, i) => {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
});

let __list = _list.reduce((pre, cur) => {
  return pre + cur;
}, 0);

console.log(__list);
