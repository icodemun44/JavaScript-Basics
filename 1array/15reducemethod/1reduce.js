let list = [1, 2, 3, 4];

let a = list.reduce((pre, cur) => {
  console.log(`pre ${pre}`);//previous value
  console.log(`cur ${cur}`);//current value
  return 10;
}, 0);
