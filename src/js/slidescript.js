let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.querySelector(".slides");
    const slideWidth = slides.offsetWidth; // largura de cada slide
    if (n >= slides.children.length) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.children.length - 1}
    slides.style.transform = `translateX(${-slideIndex * slideWidth}px)`; // mover os slides
}