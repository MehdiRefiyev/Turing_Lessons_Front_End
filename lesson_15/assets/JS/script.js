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
// const size = 2;

// const result = [arr_2.splice(0 , size) , arr_2.splice( 0 , size) , arr_2.splice( 0 , size) ];

// console.log(result);

const arr_2 = [1, 2, 3, 4, 5, 6, 7];
const size=2;
const result=[]
let last_index=0;


for(let i=0;i<arr_2.length/size;i++){
    result.push(arr_2.slice(last_index , last_index+=size));
}

console.log(result);     

console.log("///////////////////////////////////////");

// ### Task 5: Array of Objects – Sort by Multiple Properties
// You have an array of people, and you need to sort them by age in ascending order. If two people have the same age, sort them by name in alphabetical order.


let people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 30 }
  ];

console.log(people.sort((a, b) => a.age - b.age));


console.log("///////////////////////////////////////");

  
// ### Task 6: Remove Duplicates from an Array
// Given an array with duplicate values, write a function to return a new array with only unique values.

const num_s = [1, 2, 2, 3, 4, 4, 5];

console.log([...new Set(num_s)]);