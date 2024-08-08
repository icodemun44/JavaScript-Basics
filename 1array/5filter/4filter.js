//to select the names having equal or more than 4 letters

let input = ["hari", "mun", "ram" ,"nitin"];

let output = input.filter((value, i) => {
  if (value.length>=4){
    return true;
  } else {
    return false;
  }
});
{}
console.log(output);
