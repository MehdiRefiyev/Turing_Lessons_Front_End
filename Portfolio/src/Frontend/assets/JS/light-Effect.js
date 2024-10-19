let area = document.querySelector('body');

let light = document.querySelector('#light');

area.addEventListener("mousemove" ,  (e) => {

    if(window.innerWidth > 992){

            let x = e.clientX;
            let y = e.clientY + window.scrollY;

            light.style.transform = `translate(${x - 480}px, ${y - 480}px)`;
            
        }
    }
);


// ikidene bag var birinci scrol dayanmadan coxalir 
// ikinciside ki scroll herdefe bir az asaqdan basliyir