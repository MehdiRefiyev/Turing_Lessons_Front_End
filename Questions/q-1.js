// This Question about map and object keys . How change keys with map 


// This array we need change 
const myArray = [    
    { a:'1' , b:'2' },
    { a:'3' , b:'4' }
]       



// this my solution
let answerTwo =  myArray.map((item) => {

    let name = item.a
    
    delete item.a

    item.name = name;

    let surname = item.b
    
    delete item.b

    item.surname = surname;
                
    return item

});


console.log(answerTwo); 


// Rail teacher solutin . He use at here destructuring in javascript

let answer =  myArray.map(({a:name , b:surname}) => ({name,surname}));

console.log(answer);



// This example of custom map to understand how work map array method

// Array.prototype.myMap = (callback) {
//     let newArray = [];
//     let x = this.length;
//     for (let i = 0; i < x; i++) {
//       let counter = callback(this[i]);
//       newArray.push(counter);
//     }
//     return newArray;
//   };
  
//   let arr = [1, 2, 3];
//   arr = arr.myMap(e => e * 2);
//   console.log(arr);