let area = document.querySelector('body');

let main = document.querySelector('main');

area.addEventListener("mousemove" ,  (e) => {

        if(window.innerWidth > 992){
            let x = e.clientX;
            let y = e.clientY + window.scrollY;

            main.style.setProperty('--x', `${x}px`)
            main.style.setProperty('--y', `${y}px`)
        }
    }
);