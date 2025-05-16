document.addEventListener('DOMContentLoaded', function() {
    // ���� �ڵ� ...
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuCloseBtn = document.getElementById('menuCloseBtn');
    const menuBg = document.getElementById('menuBg');

    hamburgerBtn.addEventListener('click', function() {
        menuOverlay.classList.add('active');
        menuBg.classList.add('active');
    });
    menuCloseBtn.addEventListener('click', function() {
        menuOverlay.classList.remove('active');
        menuBg.classList.remove('active');
    });
    menuBg.addEventListener('click', function() {
        menuOverlay.classList.remove('active');
        menuBg.classList.remove('active');
    });
    // ESC Ű�� �ݱ�
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            menuOverlay.classList.remove('active');
            menuBg.classList.remove('active');
        }
    });
}); 