let person1 = {
  name: "nitan",
  age: 3,
};

let person2 = {
  isMarried: false,
};

let person3 = {
  address: "gagalphedi",
};

let info = { ...person1, ...person2, ...person3 };

console.log(info);
