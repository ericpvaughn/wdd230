//Fruit Variable//
fruitsUrl = "https://brotherblazzard.github.io/canvas-content/fruit.json";

function displayOrder(){
    let firstName = document.querySelector("#firstName").value
    document.querySelector("#orderName").textContent = firstName

    
}

document.querySelector("#submit-mix").addEventListener("click", displayOrder);