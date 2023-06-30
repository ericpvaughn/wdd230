// Fetch the JSON data
const url = "https://ericpvaughn.github.io/wdd230/chamber/scripts/discovery.json"

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Get the card container element
    const cardContainer = document.getElementById('cardContainer');

    // Loop through the cards
    data.cards.forEach(card => {
      // Create a new card element
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');

      // Add the image
      const imageElement = document.createElement('img');
      imageElement.src = card.image;
      cardElement.appendChild(imageElement);

     // Add the title
     const titleElement = document.createElement('h1');
     titleElement.textContent = card.title;
     cardElement.appendChild(titleElement);

      // Add the address
      const addressElement = document.createElement('p');
      addressElement.textContent = 'Address: ' + card.address;
      cardElement.appendChild(addressElement);

      // Add the phone number
      const phoneElement = document.createElement('p');
      phoneElement.textContent = 'Phone: ' + card.phone;
      cardElement.appendChild(phoneElement);

      // Add the website URL
      const websiteElement = document.createElement('p');
      const websiteLink = document.createElement('a');
      websiteLink.href = card.website;
      websiteLink.textContent = 'Website';
      websiteElement.appendChild(websiteLink);
      cardElement.appendChild(websiteElement);

      // Append the card to the container
      cardContainer.appendChild(cardElement);
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });

  // Card/List Views //
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
