let text = 'Mən Turing Academydə Programing tədrisi alıram';

let wordCounter = (text) =>{
    let sybmolRemove = text.split(" ");

    let textLenght = 0;
    
    for (let key = 0; key < sybmolRemove.length; key++) {

        let arrayItems = sybmolRemove[key];

        textLenght = textLenght + arrayItems.length;

    }

    return textLenght

}

console.log("Textin herf sayisi : " +  wordCounter(text));


let students=[
    {id:1, name: "Ali", surname: "Alisoy", age:20, grade: 95},
    {id:2, name: "Vusala", surname: "Nabiyeva", age:34, grade: 77},
    {id:3, name: "Aliya", surname: "Gurbanzade", age:14, grade: 98},
    {id:4, name: "Sabir", surname: "Nuruyev", age:15, grade: 54},
    {id:5, name: "Mehman", surname: "Heydarov", age:22, grade: 100},
    {id:6, name: "Sevana", surname: "Mammadli", age:41, grade: 35},
    {id:7, name: "Ilham", surname: "Babayev", age:24, grade: 95},
    {id:8, name: "Namiq", surname: "Gulahmedov", age:20, grade: 95},
    {id:9, name: "Aygun", surname: "Kazimova", age:24, grade: 100}
]

// 1) students arrayinda grade-i 100 və ya 95-ə bərabər olan tələbələrin adlarını consolda yazdırın;
// 2) students arrayində adındakı hərflərin sayı 5 və 5dən kiçik olanların sayını consolda yazdırın;
// 3) students arrayində id-i 8 olan obyektin adını və soyadını consolda yazdırın.

console.log("///////////////");


function higherScore(){
    for (const key in students) {

        if(students[key].grade == 95 || students[key].grade == 100){
            console.log(students[key].name + " : 95 veya 100 alanlar");
        }

    }
}

higherScore();

console.log("///////////////");

function littleNames(){

    let nameCounter = [];

    for (const key in students) {

        if(students[key].name.length <= 5){
            nameCounter.push(students[key].name);
        }

    }

    console.log(nameCounter.length + " : adındakı hərflərin sayı 5 və 5dən kiçik olanların sayısi");
    
    
}

littleNames();

console.log("///////////////");

console.log(`${students[7].name} ${students[7].surname}`);