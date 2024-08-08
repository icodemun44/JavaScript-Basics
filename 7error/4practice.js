/*make an arrow function 
that takes age as input 
and throws error if age is less than 18*/
myerror = new Error("The age is less than 18");
let a = (age) => {
  if (age < 18) {
    throw myerror;
  }
};

a(16);
