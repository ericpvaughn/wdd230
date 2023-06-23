
let windchillfield = document.querySelector(".weatherpara");

let currenttemp = document.querySelector("#current-temp").textContent;
console.log(currenttemp)
let currentwind = document.querySelector(".windspeed").textContent;

currenttemp = parseInt(currenttemp)
currentwind = parseInt(currentwind)
console.log(currenttemp)
if (currenttemp <= 50 && currentwind >3) {

    let chill = Math.round((35.74 + (0.6215 * currenttemp)) - (35.75 * Math.pow(currentwind,0.16)) + (0.4275*currenttemp*Math.pow(currentwind,0.16)));

    windchillfield.textContent = chill
} else {
    windchillfield.textContent = "N/A"
    
};

    