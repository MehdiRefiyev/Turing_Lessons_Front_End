// Task 1: Simple Timer with setTimeout
// Create a function that logs "Time's up!" to the console after 5 seconds using setTimeout.

function simpleTimer() {
    setTimeout(() => {
        console.log("Time's up!");
    }, 5000);
}

simpleTimer();

// Task 2: Countdown Timer with setInterval
// Write a function that counts down from 10 to 0 and logs each number to the console every second using setInterval. When the countdown reaches 0, display "Blast off!" and stop the interval.

function countdownTimer() {
    let count = 10;

    const interval = setInterval(() => {
        if (count === 0) {
            console.log(count);
            console.log("Blast off!");
            clearInterval(interval);
        } else {
            console.log(count);
            count--;
        }
    }, 1000);
}

countdownTimer();


// Task 3: Auto-refreshing Content
// Create a function that simulates fetching new data every 3 seconds. Use setInterval to log "Fetching new data..." to the console at regular intervals.

function fetchData(data) {

    let count = 0;

    let tiktak = setInterval(function () {

        if (data[count] === undefined) {
            clearInterval(tiktak);
        }
        else {
            console.log("Fetching new data..." + data[count]);
            return count++;
        }

    }, 3000);

}

let fecthData = [1, 2, 3, 4]

fetchData(fecthData);

// Task 4: Cancel a Timeout
// Write a function that starts a 10-second timer using setTimeout. Provide a button or a condition that can cancel the timer before it completes using clearTimeout.

let timer;

function startTimer() {
  timer = setTimeout(() => {
    console.log("10 seconds are up!");
  }, 10000); 
}

function cancelTimer() {
  clearTimeout(timer); 
  console.log("Timer canceled!");
}

startTimer(); 

let btn_1 = document.getElementById("Btn");
btn_1.addEventListener("click", cancelTimer); 

// Task 5: Update UI with setInterval
// Create a simple progress bar that fills up over 5 seconds using setInterval. Update the width of the progress bar every 100 milliseconds until it's full.
// These tasks will help your students get comfortable with both setInterval and setTimeout.

