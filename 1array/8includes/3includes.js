let data="Bearer token"
//to check whether the given string has "Bearer" in it or not
let hasBearer=data.toLowerCase().split(" ").includes("bearer")

console.log(hasBearer)

    