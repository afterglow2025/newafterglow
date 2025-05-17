document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.game-slide-track');
    const slides = document.querySelectorAll('.game-slide');
    const indicators = document.querySelectorAll('.game-slide-indicator');
    const slider = document.querySelector('.game-slide-slider');
    let current = 0;
    const slideCount = slides.length;

    function goToSlide(idx) {
        const slide = slides[0];
        const slideWidth = slide.offsetWidth;
        const slideMargin = parseFloat(getComputedStyle(slide).marginLeft) + parseFloat(getComputedStyle(slide).marginRight);
        const totalWidth = slideWidth + slideMargin;
        const sliderWidth = slider.offsetWidth;
    
        let offset;
        if (idx === 0) {
            offset = 0;
            if (window.innerWidth > 900) {
                track.style.paddingLeft = "120px";
            } else {
                track.style.paddingLeft = "0px";
            }
        } else {
            offset = totalWidth * idx - (sliderWidth - totalWidth) / 2;
            track.style.paddingLeft = "0px";
        }

        console.log(`goToSlide(${idx})`);
        console.log(`slideWidth: ${slideWidth}, slideMargin: ${slideMargin}`);
        console.log(`totalWidth: ${totalWidth}, sliderWidth: ${sliderWidth}`);
        console.log(`offset: ${offset}`);
    
        track.style.transform = `translateX(-${offset}px)`;
        indicators.forEach((el, i) => el.classList.toggle('active', i === idx));
        current = idx;
    }
    
    goToSlide(0);

    indicators.forEach((el, i) => {
        el.addEventListener('click', () => goToSlide(i));
    });

    setInterval(() => {
        const next = (current + 1) % slideCount;
        goToSlide(next);
    }, 3000);
});
