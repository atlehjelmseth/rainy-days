
/* Fetch from rest API */

const url = "https://rainydays.eltprod.no/wp-json/wc/store/products";

const jacketsApi = document.querySelector(".products");

async function JacketsApiFunction() {
  try{const response = await fetch(url);
    const results = await response.json();

    jacketsApi.innerHTML = "";

    console.log(results)
    

    for(let i = 0; i < results.length; i++) {
      jacketsApi.innerHTML += `<div class="jacket-container">
                                <img src="${results[i].images[0].src}" alt="${results[i].images[0].alt}">
                                  <p>${results[i].name}</p>
                                  <p class="price">${results[i].prices.price}$</p>
                                  <a href="productpage.html?id=${results[i].id}" class="more_info">Get more info</a>
                                  </div>`;


                                }
                                document.querySelector('.low-high').addEventListener("click", function(){
                                  results.sort(                                    
                                      function(a,b){
                                          if(a.name > b.name){
                                              return 1;
                                          }
                                          else if(a.name < b.name){
                                              return -1;
                                          }
                                          else {
                                              return 0;
                                          }
                                          
                                      }
                                      
                                  )
                                  console.log(results[0].name)
                                  jacketsApi.innerHTML += `Test`;
                                })
                              
  }catch (error) {
    jacketsApi.innerHTML = "Unable to connect to the API";
    console.log("this works")
  }

}

JacketsApiFunction()


// document.querySelector('.low-high').addEventListener("click", function(){
//   jacketsApi.innerHTML = jacketPrices;
// })


// function onSale() {
//   priceJacket = results.on_sale;
//   if(priceJacket === true){
//     on_sale.style.display = "block";
//   }else {
//     on_sale.style.display = "none";
//   }
// }

// onSale()

// document.querySelector('low_high').addEventListener("click", function(){
//   results[i].prices.price.sort()
// })