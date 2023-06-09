// Hidden Field
const djoin = new Date();
const yearjoin = djoin.getFullYear();
const clockjoin = `${djoin.getHours()}:${djoin.getMinutes()}:${djoin.getSeconds()}`;
document.getElementById("lastUpdate").textContent = document.lastModified;
document.getElementById("year").textContent = yearjoin;


document.querySelector("#hiddentime").value = djoin;

