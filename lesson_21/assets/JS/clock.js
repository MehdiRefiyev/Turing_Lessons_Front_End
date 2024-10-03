let startbtn = document.querySelector("button");
let clock = document.querySelector("span");

let tiktak;

function timerFunc(){

    startbtn.style.pointerEvents = "none";

    let time = clock.innerText.split(":");

    let second = time[1];

    tiktak = setInterval(function(){
        
        if(second == 0){
            clock.innerText = `00:00`;

            clock.style.color = "red";

            clearInterval(tiktak);

            startbtn.style.pointerEvents = "auto";

            setTimeout(()=>{alert("time out");}, 700)
        
        }
        else if( second >= 10){
            clock.innerText = `00:${time[1]}`;
        }
        else{
            clock.innerText = `00:0${time[1]}`;
        }

        time[1] -= 1;

        return second = time[1];

    } , 1000)
    
}

startbtn.addEventListener("click" , timerFunc);