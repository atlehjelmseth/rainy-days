const cart = document.querySelectorAll(".add_to_cart");
const clearCart = document.querySelectorAll(".clear_cart");

/* Jackets */

const jackets = [
  {
    name: 'Grey jacket',
    tag: 'greyjacket',
    price: '299',
    inCart: '0'
  },
  {
    name: 'Red jacket',
    tag: 'redjacket',
    price: '199',
    inCart: '0'
  },
  {
    name: 'Blue jacket',
    tag: 'bluejacket',
    price: '299',
    inCart: '0'
  },
  {
    name: 'Yellow jacket',
    tag: 'greyjacket',
    price: '299',
    inCart: '0'
  },
]

/* Add to cart */
for (let i=0; i < cart.length; i++) {
  cart[i].addEventListener('click', () => {
    cartNumber(jackets[i])
  })
}

function numberOfProducts() {
  let jacketNumber = localStorage.getItem('cartNumber');

  if(jacketNumber) {
    document.querySelector('.fa-shopping-cart p').textContent = jacketNumber;
  }
}

function cartNumber(jackets) {
  console.log("The product is", jackets)
  let jacketNumber = localStorage.getItem('cartNumber');

  jacketNumber = parseInt(jacketNumber);

  if (jacketNumber){
    localStorage.setItem('cartNumber', jacketNumber + 1);
    document.querySelector('.fa-shopping-cart p').textContent = jacketNumber + 1;
  } else {
    localStorage.setItem('cartNumber', 1);
    document.querySelector('.fa-shopping-cart p').textContent = 1;
  };
}

numberOfProducts()

/* Clear cart */

for (let i=0; i < clearCart.length; i++) {
  clearCart[i].addEventListener('click', () => {
    clearOut()
  })
}

function clearOut() {
  localStorage.clear();
  document.querySelector('.fa-shopping-cart p').textContent = 0;
}