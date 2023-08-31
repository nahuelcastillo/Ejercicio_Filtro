const URL = "https://fakestoreapi.com/products";
const filterBtn = document.getElementById("rangeFilterCount");
const clearBtn = document.getElementById("clearRangeFilter");
const texarea = document.getElementById("info");


document.addEventListener("DOMContentLoaded", () => {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        let datas = data;

        //Funcion para mostrar los productos
        function showProducts(array){
            const content = ""; //se crea una variable apra guardar los datos pasador por el forEach
            if(array.length > 0){ // se busca que al filtrar los datos se vea almenos 1 sino pasa al else
                array.forEach(product => {
                    content += 
                    `
                    <div class="list-group-item active"> 
                    <h4> ${product.title} </h4>
                      <p> ${product.price} </p>
                    </div>
                    `;
                texarea.innerHTML = content;    
                });
            }
            else{
               texarea.innerHTML = `<div> No hay productos en ese margen </div>`
            }
        }
    
        showProducts(datas);
    
        // esta parte filtra todos los datos y agrega el evento al boton filtrar
        filterBtn.addEventListener("click", ()=> {
            const minPrice = document.getElementById("rangeFilterCountMin").value;
            const maxPrice = document.getElementById("rangeFilterCountMax").value;

            let productFilter = datas.filter((product) => product.price >= minPrice && product.price <= maxPrice);

            showProducts(productFilter);
        })


    })
   

    //elimina lo que se este filtrando y devuelve la lista de todos los productos
    clearBtn.addEventListener("click", ()=> {

        showProducts(datas);

    })
    
    

})
