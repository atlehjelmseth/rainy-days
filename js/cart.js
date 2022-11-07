const cart = document.querySelectorAll('.add_to_cart');
const clearCart = document.querySelectorAll('.clear_cart');
const order = document.querySelectorAll('.order');

/* Fetch from rest API */

const url = "https://rainydays.eltprod.no/wp-json/wc/store/products";

const jacketsApi = document.querySelector(".products");

async function JacketsApiFunction() {
  try{ const response = await fetch(url);
    const results = await response.json();
    
    console.log(results)

    jacketsApi.innerHTML = "";
         
    for(let i = 0; i < results.length; i++) {

      
      jacketsApi.innerHTML += `<div class="jacket-container">
                                <img src="${results[i].images[0].src}" alt="${results[i].images[0].alt}"></a>
                                  <p>${results[i].name}</p>
                                  <p class="price">${results[i].prices.price}$</p>
                                  <a href="productpage.html?id=${results[i].id}" class="more_info">Get more info</a> 
                                  </div>`;
    }
    console.log()
   }catch (error) {
     jacketsApi.innerHTML = "Unable to connect to the API";
 }
}

JacketsApiFunction()




/* Jackets array */

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
    document.querySelector('.amount_of_jackets').textContent = jacketNumber;
  }
}

numberOfProducts()

function cartNumber(jackets) {
  let jacketNumber = localStorage.getItem('cartNumber');

  jacketNumber = parseInt(jacketNumber);

  if (jacketNumber){
    localStorage.setItem('cartNumber', jacketNumber + 1);
    document.querySelector('.amount_of_jackets').textContent = jacketNumber + 1;
  } else {
    localStorage.setItem('cartNumber', 1);
    document.querySelector('.amount_of_jackets').textContent = 1;
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

function totalSum(jackets) {
  let cartSum = localStorage.getItem('totalSum');
  if(cartSum != null) {
    cartSum = parseInt(cartSum);
    localStorage.setItem("totalSum", cartSum + jackets.price);
  }else {
    localStorage.setItem("totalSum", jackets.price);
  }
}


/* From localstorage to HTML */

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



/* Order */
for (let i=0; i < order.length; i++) {
  order[i].addEventListener('click', () => {
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


