//for arranging numbers in array in ascending order
let input = [6, 8, 2, 10, 29];
arr1= input.sort((a,b) => {
    return a-b;
})
console.log(arr1);

//for arranging numbers in array in descending order
let input1 = [6, 8, 2, 10, 29];
arr2= input1.sort((a,b) => {
    return b-a
});

//for largest number
console.log(arr2[0]);

//for smallest number
console.log(arr1[0]);