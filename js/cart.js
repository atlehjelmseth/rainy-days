const cart = document.querySelectorAll(".add_to_cart");


for (let i=0; i < cart.length; i++) {
  cart[i].addEventListener('click', () => {
    cartNumber()
  })
}

function numberOfProducts() {
  let jacketNumber = localStorage.getItem('cartNumber');

  if(jacketNumber) {
    document.querySelector('.fa-shopping-cart span').textContent = jacketNumber;
  }
}

function cartNumber() {
  let jacketNumber = localStorage.getItem('cartNumber');

  jacketNumber = parseInt(jacketNumber)

  if (jacketNumber){
    localStorage.setItem('cartNumber', jacketNumber + 1);
    document.querySelector('.fa-shopping-cart span').textContent = jacketNumber + 1;
  } else {
    localStorage.setItem('cartNumber', 1);};
    document.querySelector('.fa-shopping-cart span').textContent + 1;
}

numberOfProducts()