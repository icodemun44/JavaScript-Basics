let product = [
    { name: "laptop", price: 100000, quantity: 10 },
    { name: "TV", price: 200000, quantity: 5 },
    { name: "Mobile", price: 10, quantity: 2 },
  ];
  
  /*
  total price = 300010
  total price with quantity  = 100000*10 + 200000*5 + 10*2
  total price of product greater than 50000(price)=>100000*10+ 200000*5
  
  */
  
  //total price = 300010
  price1 = product.map((value, i) => {
    return value.price;
  });
  
  sum1 = price1.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
  
  console.log(sum1);
  
  
  //total price with quantity  = 100000*10 + 200000*5 + 10*2
  
  sum2 = product
    .map((value, i) => {
      return value.price * value.quantity;
    })
    .reduce((pre, cur) => {
      return pre + cur;
    }, 0);
  
  console.log(sum2);
  
  //total price of product greater than 50000(price)=>100000*10+ 200000*5
  
  sum3 = product.filter((value, i) => {
    if (value.price > 50000) {
      return true;
    } else {
      return false;
    }
  }).map((value, i) =>{
    return value.price * value.quantity
  }).reduce((pre, cur) => {
    return pre + cur
  });
  
  console.log(sum3);
  