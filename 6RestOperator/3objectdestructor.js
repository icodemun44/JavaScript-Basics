let {name,age, ...info} = {
    name:"nitan",
    age:30,
    isMarried:false,
    address:"ktm",
  }
  
  console.log(name)
  console.log(age)
  console.log(info) // {iMarried:false , address:"ktm"}
  