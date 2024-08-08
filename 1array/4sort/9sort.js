let product = [
    {name: " Cap", price:1000 },
    {name: "Bottle", price:500 },
    {name: "Cup", price:2000 },  
  ]
  
  let sortedproduct = product.sort((a,b)=> {
    return a.price - b.price
  }
  )
  
  console.log(sortedproduct)