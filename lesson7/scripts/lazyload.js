const images = document.querySelectorAll('img[data-src');

function preloadImage (img) {
    const src = img.getAttribute('data-src');
    if (!src) {
        return;
    }

    img.src = src;
    img.removeAttribute('data-src');
}

// images.forEach(image => {
//     preloadImage(image);
// })
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 20px 0px"
};

const imgObserver = new IntersectionObserver((items, imgObserver) => {
    items.forEach(item => {
        if (!item.isIntersecting) {
            return;
        } else {
            preloadImage(item.target);
            imgObserver.unobserve(item.target);
        }
    })
});

images.forEach(image => {
    imgObserver.observe(image);
})


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

