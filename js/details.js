const urlDetails = "https://rainydays.eltprod.no/wp-json/wc/store/products";

const spesifications = document.querySelector(".jacket-details");
const jacketName = document.querySelector(".jacket-title");
const cartButton = document.querySelector(".cart_button");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);


const urlJackets = urlDetails + "/" + id;

console.log(urlJackets);

async function jacketSpecs() {
  try {const response = await fetch(urlJackets);
       const resultsSpec = await response.json();
    
      console.log(resultsSpec)
     
      spesifications.innerHTML = "";
      jacketName.innerHTML = "";

      spesifications.innerHTML += `<img src="${resultsSpec.images[0].src}" alt="${resultsSpec.images[0].alt}">
                                  <div>${resultsSpec.description}</div>
                                  <p class="price">${resultsSpec.prices.price}$</p>
                                  `;

      jacketName.innerHTML = `${resultsSpec.name}`

      }catch (error) {
        spesifications.innerHTML = "Unable to connect to the API";
        cartButton.style.display = "none";
    }
   }

   jacketSpecs()


   