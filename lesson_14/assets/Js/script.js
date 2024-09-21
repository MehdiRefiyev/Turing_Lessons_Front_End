function getData(data){
    for(let i = 825; i < data.length; i++) {
        const element = data[i];
        if (element.id == 11075) {
            console.log(element);
            console.log("////////////////////////")
        }        
    }
}

function  getUsaCount(data){

    let newMatrix = [];

    for (let i = 0; i < data.length; i++) {

        const element = data[i];

        if (element.shipAddress.country == "USA") {

            newMatrix.push(element.shipAddress.country);

        }
    }        
        
            
    return console.log( "shipAddress-ində country-i USA olan elementlərin sayısi : " + newMatrix.length);

}

function  shipDeleter(data){

  // let new_arr = [];

  // console.log(

  //   data.filter((item) => {

  //     if(item.employeeId == 6){
  //       return item.shipAddress
  //     }
  //   })

  // );
  // for (let index = 0; index < data.length; index++) {
  //   const element = data[index];
    
  //   if(element.employeeId === 6 ){
  //     console.log(element.shipAddress);
      
  //     const obj = element.shipAddress;
  //     let obj_2  = {address : {obj}};
  //     console.log({obj_2});
      
  //   }
  // }
  

  const filterData = data.filter(item => item.employeeId === 6 ).map(({shipAddress:address}) => 

    // { let obj= {address : {}};
    
    // obj.address = shipAddress;

    // return obj }
    
    

    {
      
      // console.log({shipAddress});

      return {address}
    
    } 

  );


  return console.log(filterData);
  

  
}

fetch('https://northwind.vercel.app/api/orders?authuser=2')
	.then(response => response.json())
	.then(data => {getData(data) ; getUsaCount(data) ; shipDeleter(data)})
	.catch(err => console.error(err));




// let newArray_3 = []

// newData.forEach((item , index) =>{

//     newArray_3.push(itme.details);    

// });

// newArray_3.flat();

// console.log(newArray_3)

// newData.forEach((item , index) =>{

//     let newArray_2 = [];

//     if(item.employeeId == 3){
//         newArray_2.push(newData[item].shipAddress);
//     }

//     return console.log(newArray_2)
// });

//1) İD-si 11075 olan elementi konsolda yazdırın. (linki aşağıda qeyd olunub)
// 2) shipAddress-ində country-i USA olan elementlərin sayınl konsolda yazdırın.


// let paramArray = [1,2,3,4,5];

// function sumArrayItems(arr , callback){
//     let newArray = [];

//     for (let i = 0; i < arr.length; i++) {
        
//         let newElment = callback(arr[i]);
        
//         newArray.push(newElment);
//     }

//     return newArray;

// }

// console.log(sumArrayItems(paramArray , item =>{

//     return item*2;

// }));



// let matrix = [10,20,30];

// function matrixChanger(array , callback){

//     let newMatrix = [];

//     for (let i = 0; i < array.length; i++) {

//         newMatrix.push(callback(array[i]));
        
//     }

//     return newMatrix;

// }

// function  mahdi(i){
//     return i/5;
// }

// console.log(matrixChanger(matrix , mahdi));


// let matrix = [1,23,4,5];


// Array.prototype.costom_Filer = function (item){

//     let newMatrix = [];

//     for (let i = 0; i < this.length; i++) {
//         if( item == this[i] ){
//             newMatrix.push(this[i]);
//         }
        
//     }

//     return newMatrix;
// };

// console.log(matrix.costom_Filer(23));


// let arr = [1, 2, 3, 4];
// let sum = arr.reduce((total, num) => total + num, 25); // 10

// let arr = [1, 2, 3, 4, 5 , 6,7,8];
// arr.splice(5, 3); // [1, 2, 5]

// console.log(arr);