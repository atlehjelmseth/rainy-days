const cart = document.querySelectorAll('.add_to_cart');
const clearCart = document.querySelectorAll('.clear_cart');

/* Jackets */

const jackets = [
  {
    name: 'Grey jacket',
    tag: 'greyjacket',
    price: 299,
    numberOf: 0
  },
  {
    name: 'Red jacket',
    tag: 'redjacket',
    price: 199,
    numberOf: 0
  },
  {
    name: 'Blue jacket',
    tag: 'bluejacket',
    price: 299,
    numberOf: 0
  },
  {
    name: 'Yellow jacket',
    tag: 'yellowjacket',
    price: 299,
    numberOf: 0
  },
]

/* Add to cart */
for (let i=0; i < cart.length; i++) {
  cart[i].addEventListener('click', () => {
    cartNumber(jackets[i]);
    totalSum(jackets[i])
  })
}

function numberOfProducts() {
  let jacketNumber = localStorage.getItem('cartNumber');

  if(jacketNumber) {
    document.querySelector('.fa-shopping-cart p').textContent = jacketNumber;
  }
}

function cartNumber(jackets) {
  let jacketNumber = localStorage.getItem('cartNumber');

  jacketNumber = parseInt(jacketNumber);

  if (jacketNumber){
    localStorage.setItem('cartNumber', jacketNumber + 1);
    document.querySelector('.fa-shopping-cart p').textContent = jacketNumber + 1;
  } else {
    localStorage.setItem('cartNumber', 1);
    document.querySelector('.fa-shopping-cart p').textContent = 1;
  };

  specifications(jackets)
}

function specifications(jackets) {
  let jacketSpec = localStorage.getItem('jacketsSpecs');
  jacketSpec = JSON.parse(jacketSpec);

  if(jacketSpec != null) {

    if(jacketSpec[jackets.tag] == undefined) {
      jacketSpec = {
        ...jacketSpec,
        [jackets.tag]: jackets
      }
    }
    jacketSpec[jackets.tag].numberOf += 1;
  } else {
    jackets.numberOf = 1;
    jacketSpec = {
      [jackets.tag]: jackets
    }
  }

  const jacketSpecs = JSON.stringify(jacketSpec);

  localStorage.setItem('jacketsSpecs', jacketSpecs);
}

function localToHtml() {
  let localJackets = localStorage.getItem("jacketsSpecs");
  localJackets = JSON.parse(localJackets);

  let jacketContainer = document.querySelector(".checkout-content");

  if(localJackets && jacketContainer) {
    jacketContainer.innerHTML = '';
    Object.values(localJackets).map(item =>{
      jacketContainer.innerHTML += ``
                                    
    });
  }
}

localToHtml()
numberOfProducts()


function totalSum(jackets) {
  let cartSum = localStorage.getItem('totalSum');


  if(cartSum != null) {
    cartSum = parseInt(cartSum);
    localStorage.setItem("totalSum", cartSum + jackets.price);
  }else {
    localStorage.setItem("totalSum", jackets.price);
  }
}

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