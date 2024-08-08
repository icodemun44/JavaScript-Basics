let list = ["utshav", "mun", "aavashyak"];
//to find the string with greatest number of characters
let output = list.reduce((pre, cur) => {
  if (cur.length >= pre.length) {
    return cur;
  } else {
    return pre;
  }
}, "");

console.log(output);
