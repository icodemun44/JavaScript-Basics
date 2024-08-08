// fiboSeries(5)   =[0,1,1,2,3]
let output = [0,1];
let fiboSeries = (n) => {
  for (let i = 0; i < (n-2); i++) {
    let lastElement = output.at(-1) + output.at(-2)
    output.push(lastElement)
  }
  return output;
};

console.log(fiboSeries(10));
