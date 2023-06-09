let lastVisit = localStorage.getItem("visit")
if (!lastVisit) {
    localStorage.setItem("visit", new Date())
} else {
    let currentDate = new Date();
    let timeStamp1 = currentDate.getTime()
    let timeStamp2 = new Date(lastVisit).getTime();
    console.log(timeStamp2)
    let timeDifference = timeStamp1 - timeStamp2
    let difference = timeDifference /(1000 * 60 *60 *24)
    console.log(Math.floor(difference))
    localStorage.setItem("visit", currentDate)
    document.querySelector("#visit").textContent = Math.floor(difference)
}