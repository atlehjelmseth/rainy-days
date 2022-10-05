const cart = document.querySelectorAll('.add_to_cart');
const clearCart = document.querySelectorAll('.clear_cart');
const pay = document.querySelectorAll('.pay');

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
  let cartSum = localStorage.getItem('totalSum');
  localJackets = JSON.parse(localJackets);
  let jacketContainer = document.querySelector(".jackets");
  let buttonsContainer = document.querySelector(".checkout_buttons");

  if(localJackets && jacketContainer) {
    jacketContainer.innerHTML = '';
    Object.values(localJackets).map(item =>{
      jacketContainer.innerHTML += `<div class="jacket-total">
                                    <div class="jacket">
                                      <img src="./images/${item.tag}.png">
                                      <div>${item.name}</div>
                                    </div>
                                    <div class="price-jacket">Price: $${item.price}</div>
                                    <div class="quantity">
                                      Quantity: ${item.numberOf}
                                    </div>
                                    <div class="total">
                                      Total: $${item.numberOf * item.price}
                                    </div>
                                    </div>
                                    `              
    });
      jacketContainer.innerHTML += `<div class="totalsum"><p>Grand total: $${cartSum}</p></div>`
      buttonsContainer.style.display = "block";
      
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


/* Pay */
for (let i=0; i < pay.length; i++) {
  pay[i].addEventListener('click', () => {
    clearOut()
    window.alert("Order has successfully been received");
  })
}

/* Clear cart */

for (let i=0; i < clearCart.length; i++) {
  clearCart[i].addEventListener('click', () => {
    clearOut()

  })
}

function clearOut() {
  localStorage.clear();
  window.location.reload();
  window.scrollTo(0, 0);
}
