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