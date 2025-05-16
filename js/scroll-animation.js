document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // 애니메이션이 한 번만 실행되도록
            }
        });
    }, {
        threshold: 0.2 // 요소가 20% 보일 때 애니메이션 시작
    });

    // afterglow-desc 요소 관찰 시작
    const afterglowDesc = document.querySelector('.afterglow-desc');
    if (afterglowDesc) {
        observer.observe(afterglowDesc);
    }
}); 