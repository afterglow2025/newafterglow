document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // �ִϸ��̼��� �� ���� ����ǵ���
            }
        });
    }, {
        threshold: 0.2 // ��Ұ� 20% ���� �� �ִϸ��̼� ����
    });

    // afterglow-desc ��� ���� ����
    const afterglowDesc = document.querySelector('.afterglow-desc');
    if (afterglowDesc) {
        observer.observe(afterglowDesc);
    }
}); 