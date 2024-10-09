const products = [
  { id: 1, name: "LD01 LOUNGE CHAIR", price: 200, image: "assets/Images/1.png" },
  { id: 2, name: "LD02 LOUNGE CHAIR", price: 250, image: "assets/Images/2.png" },
  { id: 3, name: "LD03 LOUNGE CHAIR", price: 200, image: "assets/Images/3.png" },
  { id: 4, name: "LD04 LOUNGE CHAIR", price: 200, image: "assets/Images/4.png" },
  { id: 5, name: "LD05 LOUNGE CHAIR", price: 300, image: "assets/Images/5.png" },
  { id: 6, name: "LD06 LOUNGE CHAIR", price: 200, image: "assets/Images/6.png" },
  { id: 7, name: "LD07 LOUNGE CHAIR", price: 200, image: "assets/Images/7.png" },
  { id: 8, name: "LD08 LOUNGE CHAIR", price: 250, image: "assets/Images/8.png" },
];

const cart = [];
const productList = document.getElementById('productList');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const cartToggle = document.getElementById('cartToggle');
const cartWrapper = document.getElementById('cartWrapper');
const closeCart = document.getElementById('closeCart');

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
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

function removeFromCart(productId) {
  const index = cart.findIndex(item => item.id === productId);
  if (index !== -1) {
      cart.splice(index, 1);
      updateCart();
  }
}

function updateCart() {
  cartItems.innerHTML = cart.map(item => `
      <div class="flex justify-between items-center">
          <span>${item.name}</span>
          <div>
              <span class="mr-4">$${item.price}</span>
              <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700">
                  Remove
              </button>
          </div>
      </div>
  `).join('');

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = `$${total}`;
  cartCount.textContent = cart.length;
}

function toggleCart() {
  cartWrapper.classList.toggle('open');
}

cartToggle.addEventListener('click', toggleCart);
closeCart.addEventListener('click', toggleCart);

renderProducts();


{/* <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="https://picsum.photos/seed/LD01/48/48" alt="LD01 LOUNGE CHAIR" class="w-12 h-12 object-cover mr-2">
                        <span>LD01 LOUNGE CHAIR</span>
                    </div>
                    <div class="flex items-center">
                        <span class="mr-2">$200</span>
                        <input type="number" min="1" value="1" class="w-8 h-8 bg-gray-800 text-white text-center rounded-md focus:outline-none">
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="https://picsum.photos/seed/LD02/48/48" alt="LD02 LOUNGE CHAIR" class="w-12 h-12 object-cover mr-2">
                        <span>LD02 LOUNGE CHAIR</span>
                    </div>
                    <div class="flex items-center">
                        <span class="mr-2">$250</span>
                        <input type="number" min="1" value="1" class="w-8 h-8 bg-gray-800 text-white text-center rounded-md focus:outline-none">
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="https://picsum.photos/seed/LD03/48/48" alt="LD03 LOUNGE CHAIR" class="w-12 h-12 object-cover mr-2">
                        <span>LD03 LOUNGE CHAIR</span>
                    </div>
                    <div class="flex items-center">
                        <span class="mr-2">$200</span>
                        <input type="number" min="1" value="1" class="w-8 h-8 bg-gray-800 text-white text-center rounded-md focus:outline-none">
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="https://picsum.photos/seed/LD04/48/48" alt="LD04 LOUNGE CHAIR" class="w-12 h-12 object-cover mr-2">
                        <span>LD04 LOUNGE CHAIR</span>
                    </div>
                    <div class="flex items-center">
                        <span class="mr-2">$200</span>
                        <input type="number" min="1" value="1" class="w-8 h-8 bg-gray-800 text-white text-center rounded-md focus:outline-none">
                    </div>
                </div> */}