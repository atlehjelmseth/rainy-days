const urlDetails = "https://rainydays.eltprod.no/wp-json/wc/store/products";

const spesifications = document.querySelector(".jacketDetails");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);


const urlJackets = urlDetails + "/" + id;

console.log(urlJackets);

async function jacketSpecs() {
  try {const response = await fetch(urlJackets);
       const results = await response.json();
    
      console.log(results)

      spesifications.innerHTML = "";

      spesifications.innerHTML += `<h1>${results[i].name}</h1>`;

      
      }catch (error) {
        spesifications.innerHTML = "Unable to connect to the API";
    }
   }

   jacketSpecs()
