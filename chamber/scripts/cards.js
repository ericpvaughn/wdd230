
const url = 'https://ericpvaughn.github.io/wdd230/chamber/scripts/discovery.json';

async function getBusinessData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.directory);  
  displayDirectory(data.directory);
}

const gridbutton = document.querySelector("#gridbutton");
const listbutton = document.querySelector("#listbutton");
const display = document.querySelector("#cardContainer");



listbutton.addEventListener("click", () => {
  display.classList.remove('cards')
  display.classList.add("list");
})

gridbutton.addEventListener("click", () => {
  display.classList.remove("list");
  display.classList.add('cards')
})


  //business cards
  getBusinessData();
   
   function displayDirectory (directory) {
    
    const cards = document.querySelector('div.cards'); // select the output container element

  
    directory.forEach((business) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let logo = document.createElement('img');
      let title = document.createElement('h2');
      let address= document.createElement('h3');
      let phone = document.createElement('h3');
      let membership = document.createElement('h3');
      let website = document.createElement('h3');
    

  
 
      title.textContent = `${business.title}`;
      address.textContent = `${business.address}`;
      phone.textContent = `${business.phone}`;
      membership.textContent = `${business.membership}`;
      website.textContent = `${business.website}`;
      

  

        logo.setAttribute('src', business.image);
        logo.setAttribute('alt', `logo of ${business.title}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '440');

        
      card.appendChild(logo);
      card.appendChild(title);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(membership);
      card.appendChild(website);
  
      cards.appendChild(card);
    }) // end of forEach loop
  } // end of function expression

