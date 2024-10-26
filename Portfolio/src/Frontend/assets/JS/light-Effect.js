let area = document.querySelector('body');

let light = document.querySelector('#light');

area.addEventListener("mousemove" ,  (e) => {

    if(window.innerWidth > 992){

            let x = e.clientX;
            let y = e.clientY;
            
            light.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        }
    }
);