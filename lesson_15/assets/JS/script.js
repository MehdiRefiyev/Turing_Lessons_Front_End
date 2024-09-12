// custom flatMap 

let array = [1,[2,3,4], 5 , [6,7] , 8];

Array.prototype.custom_flatMap = function (num){
    
    let flatArray = this.flat(Infinity);

    let newArray = flatArray.map(num);

    return newArray.flat(Infinity);

}

console.log(array.custom_flatMap( (num) => [num , num * 10]));


console.log("///////////////////////////////////////");

// Task 1: Grouping by a Property
// You have an array of objects representing students, and you need to group them by their grade.

const students = [
    { name: 'Alice', grade: 'A' },
    { name: 'Bob', grade: 'B' },
    { name: 'Charlie', grade: 'A' },
    { name: 'David', grade: 'C' }
  ];
 

let newArray_1 = {
    A: [],
    B: [],
    C: []
};

students.filter((item) => {

    if (item.grade == 'A') {
        newArray_1.A.push(item.name);
    }

    else if (item.grade == 'B'){
        newArray_1.B.push(item.name);
    }
    else{
        newArray_1.C.push(item.name);
    }

    return newArray_1;
    
});  

console.log(newArray_1);


console.log("///////////////////////////////////////");

// Task 2: Deep Flatten an Array
// Given an array that contains both nested arrays and single elements, write a function to flatten it completely.


const nestedArray = [1, [2, [3, 4], 5], [6], 7];

console.log(nestedArray.flat(Infinity));

console.log("///////////////////////////////////////");

// Task 3: Array Transformation with Filter, Map, and Reduce
// You have an array of transactions. Each transaction has an `amount` and a `type` ('income' or 'expense').

const transactions = [
    { type: 'income', amount: 100 },
    { type: 'expense', amount: 50 },
    { type: 'income', amount: 200 },
    { type: 'expense', amount: 150 }
];

let newArray_2 = {
    totalIncome:0,
    totalExpenses:0,
};

transactions.filter((item) =>{
    if (item.type == 'income') {
       return newArray_2.totalIncome += item.amount;
    }

    else{
       return newArray_2.totalExpenses += item.amount;
    }
});

console.log(newArray_2);

console.log("///////////////////////////////////////");

// Task 4: Find the Most Frequent Element
// You have an array of strings, and you need to find the string that appears most frequently.

const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];

function mostFrequentUsing(arr) {
    const counts = arr.reduce((acc, num) => {
      acc[num] = (acc[num] || 0) + 1;
      return acc;
    }, {});
  
    return Object.keys(counts).reduce((a, b) => 
        (counts[a] > counts[b] ? a : b));
  }
  
console.log(mostFrequentUsing(words));

console.log("///////////////////////////////////////");
  
// ### Task 7: Chunk an Array into Subarrays
// Write a function that splits an array into smaller arrays (chunks) of a specified size.

// const arr_2 = [1, 2, 3, 4, 5, 6, 7];
// const size = 3;
// const new_arr = [];
// arr_2.forEach((item) => {

//     new_arr.push(item);

//     return new_arr;

// });

// console.log(new_arr);


// console.log("///////////////////////////////////////");

