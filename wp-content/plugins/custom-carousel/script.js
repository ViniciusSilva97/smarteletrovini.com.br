document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.custom-carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    let index = 0;

    setInterval(() => {
        index = (index + 1) % slides.length;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }, 3000); // Muda a imagem a cada 3 segundos
});
