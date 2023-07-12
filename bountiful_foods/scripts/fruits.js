fruitsUrl = "https://brotherblazzard.github.io/canvas-content/fruit.json";

fruit1 = document.querySelector('#fruit1');
fruit2 = document.querySelector('#fruit2');
fruit3 = document.querySelector('#fruit3');


const requestFruits = async(fruitsUrl)=>{
    const answer = await fetch(fruitsUrl);
    console.log(answer);

    if(answer.ok === true){
        const fruitList = await answer.json();
        console.log(fruitList);
        displayFruits(fruitList);
    }
    else{
        console.log("The requested url is invalid please check your URL and API key to make sure they are correct.");
    }

};

const displayFruits = (fruitList) =>{
    fruit1.innerHTML = fruitList[3].name;
    fruit2.innerHTML = fruitList[7].name
    fruit3.innerHTML = fruitList[35].name;
}

requestFruits(fruitsUrl);

const feedbackElement = document.querySelector('feedback');
const cDate = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", 
{dateStyle: "full"}).format(cDate);

           
const formElement = document.querySelector("#firstName");
const formElement2 = document.querySelector("#eMail");
const formElement3 = document.querySelector("#phoneNumber");
            
formElement.addEventListener('submit', function(e) {
               
    e.preventDefault();
                
    feedbackText = `Hello ${formElement.value} <br> <p>Your Email: ${formElement2.value}</p> <br> <p>Your Phone: ${formElement3.value}</p> <br> <p>Your Fruits: ${fruit1.value},${fruit2.value},${fruit3.value}</p> <br> <p>Date: ${fullDate}</p>`;
                
    feedbackElement.style.display = "block";
    feedbackElement.appendChild(feedbackText);
               

});


