const URL = "https://fakestoreapi.com/products";
const minPrice = document.getElementById("rangeFilterCountMin")
const maxPr
const filterBtn = document.getElementById("rangeFilterCount");
const texarea = document.getElementById("info");

document.addEventListener("DOMContentLoaded", () => {
    fetch(URL) 

    function Fetch(){
        fetch(URL)
        .then (response => response.json());
    }
        // Fetch a URL y organizamos la info obtenida del JSON en un listado
});

filterBtn.addEventListener("click, () => { FetchProducts() ;
});







/*
            <a href="#" class="list-group-item active"> 
              <h4 class="list-group-item-heading">{data.title} </h4>
                <p class="list-group-item-text">{data.price} </p>
              </a>

*/
