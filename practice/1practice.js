let product = [
  { name: "laptop", price: 100000, quantity: 10 },
  { name: "TV", price: 200000, quantity: 5 },
  { name: "Mobile", price: 10, quantity: 2 },
];

//required output ["laptop, "TV", "Mobile"]

let output = product.map((value, i) => {
  return `${value.name} cost ${value.price}`;
});

//to show price

let output1 = product.map((value, i) => {
  return value.price;
});

console.log(output);
console.log(output1);

output2 = product.filter((value, i) => {
  if (value.price > 50000) {
    return true;
  } else {
    return false;
  }
}).map((value,i) => {
    return value.name
});



console.log(output2);
