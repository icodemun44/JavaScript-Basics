let list = [
    { name: "earphone", price: 1000 },
    { name: "battery", price: 2000 },
    { name: "charger", price: 3000 },
  ];
  
  let products = list.map((value, i) => {
    return value.price;
  });
  
  let _products = products.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
  
  console.log(_products);
  