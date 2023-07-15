const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.15818&lon=117.3506&units=imperial&appid=93c38752305ca77c6133640779c32982';

const currentTemp = document.querySelector('#temp');
const cHumidity = document.querySelector('#humidity');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#w-description');
const cloudSky = 'https://cdn-icons-png.flaticon.com/128/1146/1146869.png';
const sunSky = 'https://cdn-icons-png.flaticon.com/128/2698/2698194.png';
const rainSky = 'https://cdn-icons-png.flaticon.com/128/3026/3026385.png';
const drizzleSky = 'https://cdn-icons-png.flaticon.com/128/3076/3076129.png';
const stormSky = 'https://cdn-icons-png.flaticon.com/128/7774/7774408.png';
const smokeSky = 'https://cdn-icons-png.flaticon.com/128/3313/3313998.png';

const requestData = async(url)=>{
    const response = await fetch(url);
    console.log(response);

    if(response.ok === true){
        const data = await response.json();
        console.log(data);
        displayResults(data);
    }
    else{
        console.log("The requested url is invalid please check your URL and API key to make sure they are correct.");
    }
};

function capFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const displayResults = (weatherData)=>{
    let temperature = parseInt(weatherData.main.temp);
    currentTemp.innerHTML = temperature;


    let mainCondition = weatherData.weather[0].main;
    if (mainCondition === 'Clouds'){
        iconImg = cloudSky;
    }   else if(mainCondition === 'Clear'){
        iconImg = sunSky;
    }   else if(mainCondition === 'Rain'){
        iconImg = rainSky;
    }   else if(mainCondition === 'Drizzle'){
        iconImg = drizzleSky;
    }   else if(mainCondition === '	Thunderstorm'){
        iconImg = stormSky;
    }   else if(mainCondition === 'Smoke'){
        iconImg = smokeSky;
    }   else{
        iconImg = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    };


    
    const descript = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconImg);
    weatherIcon.setAttribute('alt','weather-icon');

    captionDesc.innerText = capFirstLetter(descript);

    const humidity = weatherData.main.humidity;
    cHumidity.innerHTML = humidity;

};


const url2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.15818&lon=117.3506&units=imperial&appid=93c38752305ca77c6133640779c32982';

const foreTemp1 = document.querySelector('#fore-temp1');
const foreDesc1 = document.querySelector('#fore-description1');
const foreHum1 = document.querySelector('#fore-humidity1');

const foreTemp2 = document.querySelector('#fore-temp2');
const foreDesc2 = document.querySelector('#fore-description2');
const foreHum2 = document.querySelector('#fore-humidity2');

const foreTemp3 = document.querySelector('#fore-temp3');
const foreDesc3 = document.querySelector('#fore-description3');
const foreHum3 = document.querySelector('#fore-humidity3');

const foreIcon1 = document.querySelector('#fore-icon1');
const foreIcon2 = document.querySelector('#fore-icon2');
const foreIcon3 = document.querySelector('#fore-icon3');

const requestF = async(url2) =>{
    const responseF = await fetch(url2);
    console.log(responseF);

    if(responseF.ok === true){
        const dataF = await responseF.json();
        console.log(dataF);
        displayResultsF(dataF);

    }
    else{
        console.log("The requested url is invalid please check your URL and API key to make sure they are correct.");
    }
};



const displayResultsF = (forecastData)=>{
    foreTemp1.innerHTML = parseInt(forecastData.list[11].main.temp);
    foreTemp2.innerHTML = parseInt(forecastData.list[19].main.temp);
    foreTemp3.innerHTML = parseInt(forecastData.list[27].main.temp);

    foreDesc1.innerHTML = forecastData.list[11].weather[0].description;
    foreDesc2.innerHTML = forecastData.list[19].weather[0].description;
    foreDesc3.innerHTML = forecastData.list[27].weather[0].description;

    foreHum1.innerHTML = forecastData.list[11].main.humidity;
    foreHum2.innerHTML = forecastData.list[19].main.humidity;
    foreHum3.innerHTML = forecastData.list[27].main.humidity;

    let foreCondition1 = forecastData.list[11].weather[0].main;
    let foreCondition2 = forecastData.list[19].weather[0].main;
    let foreCondition3 = forecastData.list[27].weather[0].main;

    if (foreCondition1 === 'Clouds'){
        iconImgF = cloudSky;
    }   else if(foreCondition1 === 'Clear'){
        iconImgF = sunSky;
    }   else if(foreCondition1 === 'Rain'){
        iconImgF = rainSky;
    }   else if(foreCondition1 === 'Drizzle'){
        iconImgF = drizzleSky;
    }   else if(foreCondition1 === '	Thunderstorm'){
        iconImgF = stormSky;
    }   else if(foreCondition1 === 'Smoke'){
        iconImgF = smokeSky;
    }   else{
        iconImgF = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    };

    if (foreCondition2 === 'Clouds'){
        iconImgF2 = cloudSky;
    }   else if(foreCondition2 === 'Clear'){
        iconImgF2 = sunSky;
    }   else if(foreCondition2 === 'Rain'){
        iconImgF2 = rainSky;
    }   else if(foreCondition2 === 'Drizzle'){
        iconImgF2 = drizzleSky;
    }   else if(foreCondition2 === '	Thunderstorm'){
        iconImgF2 = stormSky;
    }   else if(foreCondition2 === 'Smoke'){
        iconImgF2 = smokeSky;
    }   else{
        iconImgF2 = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    };

    if (foreCondition3 === 'Clouds'){
        iconImgF3 = cloudSky;
    }   else if(foreCondition3 === 'Clear'){
        iconImgF3 = sunSky;
    }   else if(foreCondition3 === 'Rain'){
        iconImgF3 = rainSky;
    }   else if(foreCondition3 === 'Drizzle'){
        iconImgF3 = drizzleSky;
    }   else if(foreCondition3 === '	Thunderstorm'){
        iconImgF3 = stormSky;
    }   else if(foreCondition3 === 'Smoke'){
        iconImgF3 = smokeSky;
    }   else{
        iconImgF3 = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    };

    foreIcon1.setAttribute('src', iconImgF);
    foreIcon1.setAttribute('alt','weather-icon');
    foreIcon2.setAttribute('src', iconImgF2);
    foreIcon2.setAttribute('alt','weather-icon');
    foreIcon3.setAttribute('src', iconImgF3);
    foreIcon3.setAttribute('alt','weather-icon');
    
}

requestData(url);
requestF(url2);