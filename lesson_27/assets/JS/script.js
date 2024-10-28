let symbols = document.querySelectorAll(".symbol");

let display = document.querySelector('.display');

let divider = document.querySelector('#divider');

let minus = document.querySelector('#minus');

let multiplication = document.querySelector('#multiplication');

let plus = document.querySelector('#plus');

let equal = document.querySelector('#equal');

let clear = document.querySelector('.clear');

symbols.forEach(i => i.addEventListener('click', () => {

    let showOnDisplay = () => {
        let intNum = i.textContent;

        if (intNum == ".") {

            let str = display.value;

            if (display.value == "") {
                display.value = "0."
            }
            else if (str.charAt(str.length - 1) == ".") {
                console.error("after one point user can't give a another poit");
            }
            else if (str.indexOf('.') !== -1) {
                console.error("after one point user can't give a another poit");
            }
            else {
                display.value += intNum;
            }

        }
        else {
            display.value += intNum;
        }
    };

    showOnDisplay();

})
);

divider.addEventListener('click', () => {

    let intOperator = divider.textContent;

    let str = display.value;

    if (str.charAt(str.length - 1) == "÷") {
        console.error("user can't give after diveder the another divider");
    }
    else if (display.value == "") {
        console.error("user can't input diveder if in front diveder not have symbol");
    }
    else {
        display.value += intOperator;
    }

})

minus.addEventListener('click', () => {

    let intOperator = minus.textContent;

    let str = display.value;

    if (str.charAt(str.length - 1) == "-") {
        console.error("user can't give after minus the another minus");
    }
    else {
        display.value += intOperator;
    }

})

multiplication.addEventListener('click', () => {

    let intOperator = multiplication.textContent;

    let str = display.value;

    if (str.charAt(str.length - 1) == "×") {
        console.error("user can't give after multiplication the another multiplication");
    }
    else if (display.value == "") {
        console.error("user can't input multiplication if in front diveder not have symbol");
    }
    else {
        display.value += intOperator;
    }

})

plus.addEventListener('click', () => {

    let intOperator = plus.textContent;

    let str = display.value;

    if (str.charAt(str.length - 1) == "+") {
        console.error("user can't give after plus the another plus");
    }
    else if (display.value == "") {
        console.error("user can't input plus if in front diveder not have symbol");
    }
    else {
        display.value += intOperator;
    }

})

equal.addEventListener('click', () => {

    let str = display.value;

    let result = str.charAt(str.length - 1);

    if (result == "+" || result == "×" || result == "-" || result == "÷") {

        alert("Error last input need to be symbol");

    }
    else {

        str = str.replace(/÷/g, '/').replace(/×/g, '*');

        try {
            let answer = Function(`"use strict"; return (${str})`)();
            display.value = answer;
        } catch (error) {
            alert("Error: Invalid expression");
            console.error(error);
        }
    }

});

clear.addEventListener('click', () => {
    display.value = '';
});

// bitirdikden sora git push elemeyi yaddan cixarma 