// 1.
// : Create a createShoppingCart function that allows users to add items to a shopping cart, calculate the total cost, and display the cart contents.
// :
// The createShoppingCart function should return an object with the following methods:
// addItem(itemName, price): Adds an item to the cart.
// removeItem(itemName): Removes an item from the cart if it exists.
// getTotal(): Returns the total cost of the items in the cart.
// showCart(): Displays all items currently in the cart.
// : Use a closure to store the cart items and their prices privately.

function createShoppingCart(){

    let produc = [];
    let cost = [];

    return {
        addItem(itemName, price){

            produc.push(itemName);

            cost.push(price);

            return console.log(itemName , cost[cost.length - 1]);
            
        },
        removeItem(itemName){

            let result = produc.filter(item => item !== itemName);

            return console.log(result);
        },
        getTotal(){
            return console.log(cost.reduce((a, b) => a + b, 0));
        },
        showCart(){
            return console.log(produc);
        }
    }
}

let shopping_1 = createShoppingCart();

shopping_1.addItem("mehdi" , 20);

shopping_1.addItem("ibra" , 22);

shopping_1.removeItem("ibra")

shopping_1.showCart();

shopping_1.getTotal();


// 2.
// : Create a function memoize(fn) that improves the performance of any function by caching its previously computed results.
// :
// The memoize function should accept another function fn as an argument and return a new function that:
// Caches the result for a given input.
// If the function is called again with the same input, it returns the cached result instead of re-executing fn.
// :
// const memoizedAdd = memoize(add); should cache the results of add(a, b).
// : Use an object inside the closure to store inputs and their corresponding outputs.

function memoize(fn){

    let result = fn; 

    return {
        
    }

}

function add(a,b){
    let sum = a + b;
    return sum;
}

const memoizedAdd = memoize(add(5,6)); 

// memoizedAdd();

// 3.
// : Create a function createEventLogger that keeps track of events happening in an application.
// :
// The createEventLogger function should return an object with methods to:
// logEvent(eventName): Adds an event to the event log.
// getEvents(): Returns all logged events.
// clearLog(): Clears the event log.
// : Use closure to maintain the event log, which should be private.

function createEventLogger(){

    let eventLog = [];

    return {
        logEvent(eventName){
            return eventLog.push(eventName);
        },
        getEvents(){
            return eventLog;
        },
        clearLog(){
            return eventLog = [];
        },
    }
}

const logger = createEventLogger();

logger.logEvent('User signed in');
logger.logEvent('Page loaded');

console.log(logger.getEvents());

logger.clearLog();
console.log(logger.getEvents());

// 4.
// : Create a function createCountdownTimer that sets up a countdown timer.
// :
// The function should return an object with:
// start(seconds): Starts the countdown from the given seconds.
// getTime(): Returns the remaining time in seconds.
// stop(): Stops the countdown.
// reset(seconds): Resets the countdown timer to the specified number of seconds.
// : Use a closure to store the countdown time, and make sure it can be updated by the methods.

function createCountdownTimer(){

    let time = 0.01;

    return {
        start(seconds){

            if (seconds <= 0) {
                this.stop();
            }
            else{
                let tiktak = setInterval( function(){

                    if (time <= 0) {
                        clearInterval(tiktak);
                        return console.log('timer stoped');
                    }
                    else{
                        console.log(seconds);

                        time = seconds--;

                        return time;
                    }
    
                } , 1000);
            }

        },
        getTime(){
            console.log("time you have " + time);
        },
        stop(){
            return time = 0;
        },
        reset(seconds){
            time = seconds;
            this.start(seconds);
        }
    }
}

let countdown_1 = createCountdownTimer();

countdown_1.start(5);

setTimeout(() => {
    countdown_1.getTime();
    countdown_1.stop();
}, 3000);

setTimeout(() => {
    countdown_1.reset(3);
}, 6000);

// 5.
// : Create a createBankAccountWithInterest function that simulates a bank account with interest accumulation.
// :
// The function should return an object with:
// deposit(amount): Deposits money into the account.
// withdraw(amount): Withdraws money from the account.
// checkBalance(): Returns the current balance.
// addInterest(rate): Adds interest to the balance (based on a percentage rate).
// : Use closures to maintain and update the balance and interest rate privately.

function createBankAccountWithInterest() {
  let balance = 0;

  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        console.log(`Deposited: $${amount}`);
      } else {
        console.log('Depozit məbləği müsbət olmalidir.');
      }
    },

    withdraw(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log(`Withdrew: $${amount}`);
      } else if (amount > balance) {
        console.log('Çixarmaq üçün kifayət qədər vəsait yoxdur.');
      } else {
        console.log('Withdrawal məbləğ müsbət olmalidir.');
      }
    },

    checkBalance() {
      return balance;
    },

    addInterest(rate) {
      if (rate > 0) {
        const interest = (balance * rate) / 100;
        balance += interest;
        console.log(`Interest added: $${interest.toFixed(2)} at rate ${rate}%`);
      } else {
        console.log('Interest rate müsbət olmalidir.');
      }
    }
  };
}

const account = createBankAccountWithInterest();

account.deposit(1000);
console.log(account.checkBalance());  

account.addInterest(5);
console.log(account.checkBalance());  

account.withdraw(200);        
console.log(account.checkBalance());  