// write a while loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named sum

let sum = 0;
let i = 0;
while (i <= 5) {
  sum += i;
  i = i + 1;
}
// console.log(sum);

// try product

// using while loop counts down froom 5 to 1 and stores the numbers in an array named countdown

let countdown = [];
let j = 5;
while (j>0) {
  countdown.push(j);
  j--;
}
console.log(countdown);

// write a do while loop that prompts a user to enter their favouritr tea type until they enter "stop". stores each tea type in an array names teaCollection.

// let teaCollection = [];
// let tea ;
// do{
//     tea = prompt('Enter your favourate tea (type "stop " to finish)')
//     if (tea !== "stop"){
//         teaCollection.push(tea);
//     }

// }while(tea!== "stop");

// console.log(teaCollection);


// do while loop that add the numbers from 1 to 3 and stores the result in a variable named total

let total= 0;
let k = 0;
do{
    total += k;
    k++
}while(k <4)
console.log(total);


// write a for loop that multiplies each elemnt in the array[2,4,6] by 2 and stores the resul in new array named multipledNumbers

let array = [2,4,6]
let multipliedArray = []
for(let i =0 ;i = array.length ;i++){
    = array[i]*2;
}
console.log(array);
