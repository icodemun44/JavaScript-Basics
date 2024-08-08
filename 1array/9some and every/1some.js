let data = ["nitan", "mun", "rukesh"];
//if even one data gives true result then the output is true , it works as a OR gate in logic gates
let a = data.some((value, i) => {
  if (value.length > 3) {
    return false;
  } else {
    return true;
  }
});

console.log(a);
