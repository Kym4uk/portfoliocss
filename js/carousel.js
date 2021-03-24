const carouselImages = [
    'img/facegerald.svg',
    'img/johnny.svg',
    'img/geralg.svg',
    'img/punk.svg',
]
const imgContainer = document.querySelector('.portfolio-carousel .current-image');

let currentIdx = 0;


function showCurrentImage() {
    imgContainer.src = carouselImages[currentIdx];
}
function next() {
    currentIdx++;
    if (currentIdx > carouselImages - 1) currentIdx = 0;
    showCurrentImage();
}

function prev() {
    currentIdx--;
    if (currentIdx < 0) currentIdx = carouselImages.length - 1;
    showCurrentImage();
}

showCurrentImage();

setInterval(next, 3000);

document.querySelector('.portfolio-carousel .next')
    .addEventListener('click', next);

document.querySelector('.portfolio-carousel .prev')
    .addEventListener('click', prev);