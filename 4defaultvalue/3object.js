//using default value concept in object method of declaring variable

let {
    name = "ram",
    age = 16,
    isMarried = true,
  } = { age: 30, isMarried: false };
  
  console.log(name);
  console.log(age);
  console.log(isMarried);
  