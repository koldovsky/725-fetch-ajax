(() => {

    const slides = [
        '<div><img src="img/baby-yoda.svg" alt="Baby Yoda"></div>',
        '<div><img src="img/banana.svg" alt="Banana"></div>',
        '<div><img src="img/girl.svg" alt="Girl"></div>',
        '<div><img src="img/viking.svg" alt="Viking"></div>',
    ]

    let currentSlideIdx = 0;

    function renderSlide() {
        const slideContainer = document.querySelector('.main-products__carousel .carousel__slide-container');
        slideContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth > 600) {
            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth > 900) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx];
            }
        }
    }

    function nextSlide() {
        currentSlideIdx++;
        if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
        renderSlide();
    }

    function prevSlide() {
        currentSlideIdx--;
        if (currentSlideIdx < 0) currentSlideIdx = slides.length - 1;
        renderSlide();
    }

    // setInterval(nextSlide, 3000);

    renderSlide();

    const nextButton = document.querySelector('.main-products__carousel .carousel__btn-next');
    nextButton.addEventListener('click', nextSlide);

    const prevButton = document.querySelector('.main-products__carousel .carousel__btn-prev');
    prevButton.addEventListener('click', prevSlide);

    window.addEventListener('resize', renderSlide);

})();