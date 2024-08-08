// memory allocation in non primitive data type
/*
let is not sufficient
first it see whether the variable is copy of another variable 
if the variable is copy of another variable it will not create 
memory for that variable instead it will share the memory space
else it will create memory for that variable 


it looks the address   
*/
//=== is equal in non primitive data type


//oass by reference
let a = [1, 2, 3];
let b = [1, 2, 3];
let c = a;

console.log(a === b); //false
console.log(a === c); //true
