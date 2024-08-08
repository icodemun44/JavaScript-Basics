let data = ["nit", "mun", "rukesh"];
//if even one data gives false result then the output is false , it works as a AND gate in logic gates
let a = data.every((value, i) => {
  if (value.length > 3) {
    return false;
  } else {
    return true;
  }
});

console.log(a);
