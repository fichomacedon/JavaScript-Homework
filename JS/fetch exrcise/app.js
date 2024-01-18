console.log("hello")
const cardContainerEl=document.querySelector(".card-container")


const FAKESTORE_URL = "https://fakestoreapi.com/products";

function fetchFakeStoreData() {
    fetch (FAKESTORE_URL)
    .then (function(res){
        return res.json()
    }).then (function(data){
        console.log(data)
        renderCardDetails(cardContainerEl,data )
    }
    )
    
}

fetchFakeStoreData()

function renderCardDetails(cardDescEl, descriptionDetails ) {
    cardDescEl=""
    for (let details of descriptionDetails) {
        console.log(details);

    

        const cardHTML = `
    <div style="border: 2px solid;">
        <p >${details.id} </p>
        <p >${details.title}</p>
        </div>
    `
        cardContainerEl.innerHTML+=cardHTML

        
        
      }
    }

    



{/* <br> ${details.title} <br> ${details.price} <br> ${details.description} <br> ${details.category} <br> ${details.image}<br> ${details.rating} */}