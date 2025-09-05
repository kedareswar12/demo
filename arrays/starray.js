// challenge-1
// Declare an array with the names and access the first element of the array and store it i the variable
let teaFlavours = ["Green tea", "black tea", "oolang tea"];
let teaFl = new Array("Green tea", "black tea", "oolang tea");

let FirstTea = teaFlavours[0];

// challenge -2
// you have an array named teaTypes containing the some tea names -> change the 2nd elemnet to jasmine tea if not

let teaTypes = ["HearbalTea", "Masala chai", "White Tea"];

teaTypes[2] = "Jasmine Tea";


// Push method to add the elements in the array 
let citiesVissited = ["Mumbai", "Sydeny"];
citiesVissited.push("Berlin")
console.log(citiesVissited);
// citiesVissited.length

// pop method usecase
let teaOrders  = ["chai" , "ice tea", "Matcha", "Early gray"];
let lastOrder = teaOrders.pop("Early gray")
console.log(lastOrder);


// soft copy 
// -> just assign as the variable but keep mind on referencing the new array points out to the older arrays with the reference created 
let arr1 = [1, 2, 3];
let arr2 = arr1;   // soft copy (shallow copy)

arr2[0] = 99;

console.log(arr1); // [99, 2, 3]  → arr1 also changed
console.log(arr2); // [99, 2, 3]



// hard copy 

let arr11 = [1, 2, 3];
let arr22 = [...arr1];  // spread operator makes a hard copy

arr22[0] = 99;

console.log(arr11); // [1, 2, 3]  → not affected
console.log(arr22); // [99, 2, 3]

// includes method 
// concat -> to add the arrays 