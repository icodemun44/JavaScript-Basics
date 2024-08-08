//for even number
let input = [1,4,3,5,6,42,51];

let output = input.filter((value, i) => {
  if(value%2===0){
    return true
  }
  else{
    return false
  }
});

console.log(output);
