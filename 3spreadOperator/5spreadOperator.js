let person1 = {
    name: "nitan",
    age: 3,
  };
  
  let person2 = {
    isMarried: false,
  };
  
  let person3 = {
    address: "gagalphedi",
    name:"mun"
  };
  
  let info = { ...person1, ...person2, ...person3 };//person3 will overwrite the object data
  
  console.log(info);
  