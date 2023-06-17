// Fetch the JSON data
fetch('discovery.json')
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
