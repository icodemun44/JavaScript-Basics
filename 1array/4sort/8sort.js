//sorting alphabets on the basis of their length
let list = ["a", "ab", "abcd", "abcde","b","cd"]


let newList= list.sort((a,b) => {
  return a.length - b.length
})

console.log(newList)
