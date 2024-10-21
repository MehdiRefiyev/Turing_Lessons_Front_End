//  1. Create a Constructor Function: Write a constructor function for a Car object that includes properties like make, model, and year.
console.log("1..........................................................");

function Car(make , model , year){
    this.make = make;
    this.model = model;
    this.year = year;

    this.getAllinfo = function(){
        console.log(`model ${model} maked by ${make} in ${year}`);
    }

}

let bmw = new Car("BMW", "F90" , 2016 );

bmw.getAllinfo();

//  2. Add Prototype Methods: Add a method to the Car prototype called getDetails that returns a string with the car’s details (e.g., “2020 Toyota Camry”).
console.log("2..........................................................");

Car.prototype.getDetails = function(){ 
    console.log(`${this.year} ${this.make} ${this.model}`); 
}

bmw.getDetails();

console.log(bmw);

//  3. Inheritance: Create a SportsCar constructor that inherits from Car. Add a property topSpeed and a method getTopSpeed that returns the top speed.
console.log("3..........................................................");

function SportsCar(topSpeed ){

    this.topSpeed = topSpeed;

    this.getTopSpeed = function(){
        console.log(`TOP Speed ${topSpeed} km`);
        return topSpeed
    };
}

SportsCar.prototype = bmw;  //for making 4 task you must use this line code  

let bmw_Cs = new SportsCar(250);

bmw_Cs.getTopSpeed();

//  4. Prototype Chain: Demonstrate the prototype chain by creating an instance of SportsCar and accessing properties and methods from both Car and SportsCar.
console.log("4..........................................................");

console.log(bmw_Cs.make);

console.log(bmw_Cs.year);

//  5. Modify Prototype: After creating instances, modify the getDetails method on the Car prototype to include the color of the car, and observe how it affects all instances.

console.log("5..........................................................");

Car.prototype.getDetails = function(color){
    console.log(`${this.year} ${this.make} ${this.model} also color of car : ${color}`); 
}

bmw.getDetails("red");

//  6. Static Methods: Implement a static method on the Car constructor called compare that takes two car objects and returns the one with the higher year.

console.log("6..........................................................");

Car.compare = function(car1, car2) {
    if (car1.year > car2.year) {
      console.log(car1.make);
      return car1;
    } else if (car2.year > car1.year) {
      console.log(car2.make);
      return car2;
    } else {
      return null;  
    }
};

let audi = new Car("Audi", "A6", 2020);

Car.compare(bmw, audi);

//  7. Object.create: Use Object.create to create an instance of Car without using a constructor function. Add properties directly to the instance.
console.log("7..........................................................");

let car = {
    model: "F90",
    year: 2016,

    getAllinfo : function(){
        console.log(`model ${this.model} maked by ${this.make} in ${this.year}`);
    }
}

const Carnew = Object.create(car);

Carnew.make = "Bmw";

Carnew.getAllinfo();


//  8. Check for Prototypes: Write a function that checks if a given object is an instance of Car or SportsCar using instanceof.

console.log("8..........................................................");

function checkProto(obj){
    if (obj instanceof Car || obj instanceof SportsCar) {
        return true;
    }
    else{ return false }
}

console.log(checkProto(bmw));

//  9. Prototype vs. Instance Properties: Create an instance of Car, add a property directly to the instance, and show how it differs from a prototype property.

console.log("9..........................................................");

Car.prototype.wheels = 4;

const myCar = new Car('Toyota', 'Camry' , 2016);

myCar.color = 'blue';

console.log('Instance properties: ' + myCar.color); // instance

console.log('Prototype property: ' + myCar.wheels);  // prototype

console.log(myCar.hasOwnProperty('color'));  // true 

console.log(myCar.hasOwnProperty('wheels'));  // false 


//  10. Array of Objects: Create an array of Car objects and write a method on the Car prototype that takes an array and returns the car with the latest year.

console.log("10..........................................................");


const cars = [
    new Car('Honda', 'Accord', 2020),
    new Car('Tesla', 'Model 3', 2022),
    new Car('Ford', 'Mustang', 2018)
];

Car.prototype.getLatestCar = function(carsArray) {
    return carsArray.reduce((latestCar, currentCar) => {
        return currentCar.year > latestCar.year ? currentCar : latestCar;
    });
}

const latestCar = Car.prototype.getLatestCar(cars);

console.log(latestCar);

// 3 -cü hissədə call,bind,apply methodlarını araşdırın və birdə Object.create (RAIL mellim) +

// Prototype  for in , of (Haqqinda oyren) +