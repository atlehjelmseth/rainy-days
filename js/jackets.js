
/* Fetch from rest API */

const url = "https://rainydays.eltprod.no/wp-json/wc/store/products";

const jacketsApi = document.querySelector(".products");

async function JacketsApiFunction() {
  try{ const response = await fetch(url);
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
   }catch (error) {
    jacketsApi.innerHTML = "Unable to connect to the API";
 }
}

JacketsApiFunction()

