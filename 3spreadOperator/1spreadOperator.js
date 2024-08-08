let ar1 = [1, 2, 3];

//...ar1 = ...[1,2,3] = 1,2,3
//... is called SpreadOperator which is a wrapper opener and is used to make new array or object    
let ar1New = ["a", "b", ...ar1, "c"];

console.log(ar1New);
