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

fetch('https://northwind.vercel.app/api/orders?authuser=2')
	.then(response => response.json())
	.then(data => {getData(data) ; getUsaCount(data)})
	.catch(err => console.error(err));


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