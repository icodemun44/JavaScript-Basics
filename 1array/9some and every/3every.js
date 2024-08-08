//check whether the array contains every even number

let number = [2,4,10,12]

let output = number.every((value, i) => {
  if(value%2 === 0)
    {
      return true
    }
  else 
  {
    return false
  }

})

console.log(output)