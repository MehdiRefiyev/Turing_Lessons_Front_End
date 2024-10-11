const products = [
    { id: 1, name: "LD01 LOUNGE CHAIR", price: 200, image: "assets/Images/1.png" , count:0 },
    { id: 2, name: "LD02 LOUNGE CHAIR", price: 250, image: "assets/Images/2.png" , count:0 },
    { id: 3, name: "LD03 LOUNGE CHAIR", price: 200, image: "assets/Images/3.png" , count:0 },
    { id: 4, name: "LD04 LOUNGE CHAIR", price: 200, image: "assets/Images/4.png" , count:0 },
    { id: 5, name: "LD05 LOUNGE CHAIR", price: 300, image: "assets/Images/5.png", count:0 },
    { id: 6, name: "LD06 LOUNGE CHAIR", price: 200, image: "assets/Images/6.png" , count:0 },
    { id: 7, name: "LD07 LOUNGE CHAIR", price: 200, image: "assets/Images/7.png" , count:0 },
    { id: 8, name: "LD08 LOUNGE CHAIR", price: 250, image: "assets/Images/8.png" , count:0 },
];


const productList = document.getElementById('productList');
const cartItems = document.getElementById('cartItems');
const btnArea = document.getElementById('btnArea');
const cartWrapper = document.getElementById('cartWrapper');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');

function renderProducts() {
    productList.innerHTML = products.map(product => `
      <div class="bg-card-css rounded-lg shadow-md overflow-hidden">
          <div class="p-4">
              <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-contain mb-4">
              <h2 class="font-semibold text-center">${product.name}</h2>
              <p class="text-center">$${product.price}</p>
          </div>
          <div class="px-4 pb-4">
              <button onclick="addToCart(${product.id})" class="w-full py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition-colors">
                  Add to Cart
              </button>
          </div>
      </div>
    `).join('');

    let number = ++products.length;

    for (let i = 0; i < number; i++) {

        let index = i - 1;

        let item = localStorage.getItem(i);

        let obj = JSON.parse(item);

        if (item === null) {
            continue;
        }
        else{
            let newElement = document.createElement('div');
            newElement.className = 'flex items-center justify-between';
            newElement.innerHTML = `
                    <div class="productInfo">
                        <img src="${obj.image}" class="productImg">
                        <span class="nameOfItem">${obj.name}</span>
                        <span class="text-center">$${obj.price}</span>
                    </div>
                    <div class="countProduct">
                        <button class="prev" onclick = "prevCount(${index})"></button>
                        <span class="cursor-none" id = "span-${index}" >${obj.count}</span>
                        <button class="next" onclick = "nextCount(${index})"></button>
                    </div>
            `;
            cartItems.appendChild(newElement)
        }
        
    }


    btnArea.innerHTML=
    `
        <button onclick = "modalClose()" class="w-1/2 py-2 border border-white rounded hover:bg-gray-800 transition-colors">
            Close
        </button>
        <button onclick = "getTotal()" class="w-1/2 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition-colors">
            Check Out
        </button>
    `;


    getShopCount();
    
}

function addToCart(id) {

    cartWrapper.style.display = "block";

    let index = id - 1;


    if (id in localStorage) {
        let count = document.querySelector("#span-" + index);

        let item = JSON.parse(localStorage.getItem(id));

        item.count++;

        localStorage.setItem(id , JSON.stringify(item));

        count.innerHTML =  `${item.count}`;

        getShopCount();

    } else {
        localStorage.setItem(id, JSON.stringify(products[index]));

        let item = JSON.parse(localStorage.getItem(id));

        item.count++;

        localStorage.setItem(id , JSON.stringify(item));

        let newElement = document.createElement('div');
        newElement.className = 'flex items-center justify-between';
        newElement.innerHTML = `
                <div class="productInfo">
                    <img src="${products[index].image}" class="productImg">
                    <span class="nameOfItem">${products[index].name}</span>
                    <span class="text-center">$${products[index].price}</span>
                </div>
                <div class="countProduct">
                    <button class="prev" onclick = "prevCount(${index})"></button>
                    <span class="cursor-none" id = "span-${index}" >${1}</span>
                    <button class="next" onclick = "nextCount(${index})"></button>
                </div>
        `;
        cartItems.appendChild(newElement)
        getShopCount();
    }

}

function prevCount(index){

    let id = index + 1;

    let span = `#span-${index}`;

    let count = document.querySelector(span);

    let item = JSON.parse(localStorage.getItem(id));

    if( item.count < 1){
        alert("daha asaqi olmaz");
    }
    else{
        item.count--;

        localStorage.setItem(id , JSON.stringify(item));

        count.innerHTML =  `${item.count}`;
    }
    
    getShopCount();

}

function nextCount(index){

    let id = index + 1;

    let span = `#span-${index}`;

    let count = document.querySelector(span);

    let item = JSON.parse(localStorage.getItem(id));

    item.count++;

    localStorage.setItem(id , JSON.stringify(item));

    count.innerHTML =  `${item.count}`;

    getShopCount();
    
}

function modalClose(){

    cartWrapper.style.display = "none";

    productList.style.width = "100%"

    console.log("helo");
    
}

function getShopCount(){

    let lengthArray = ++products.length;

    let count = 0;

    for (let i = 0; i < lengthArray; i++) {

        let item = localStorage.getItem(i);

        let obj = JSON.parse(item);

        if (item === null) {
            continue;
        }
        else{
            count = count + obj.count;
        }

    }

    
    cartCount.innerText = count;

}

function getTotal(){

    let lengthArray = ++products.length;

    let count = 0;

    for (let i = 0; i < lengthArray; i++) {

        let item = localStorage.getItem(i);

        let obj = JSON.parse(item);

        if (item === null) {
            continue;
        }
        else{
            let price = obj.count * obj.price
            count = count + price  ;
        }

    }

    cartTotal.innerText = `$${count}`;

}

renderProducts();