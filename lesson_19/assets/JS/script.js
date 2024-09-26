function createNewElement(str){

    let newDiv = document.createElement("div");

    newDiv.innerText = str;

    let element  =  document.querySelector('#divCreator');

    element.append(newDiv);

}

createNewElement("hello World");


function changeText(str){

    let element  =  document.querySelector('#paragraph');

    element.innerText = str;

}

changeText("Salam, Dünya!");


function changeCss(){

    let element = document.querySelector('.divCss-change');

    element.style.cssText = `
            height: 99px;
            width: 99px;
            color: whitesmoke;
            background-color: cornflowerblue;
            display: flex;
            align-items: center;
            justify-content: center;
     `;

}

changeCss();


// Tapşırıq 5: Bir Neçə Element Yarat və Əlavə Et
// Elə bir funksiya yazın ki, mövcud <ul> elementinə beş yeni <li> elementi yaratsın və əlavə etsin, və hər bir <li> 1-dən 5-ə qədər nömrələnmiş olsun.

function listAdd(num){

    num++;
    
    let element = document.querySelector("#list");

    for (let i = 1; i < num; i++) {

        let newLi = document.createElement('li');

        newLi.innerText = i;
      
        element.append(newLi)
        
    }
    
}

listAdd(10);