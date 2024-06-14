document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav ul');
    
    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('open');
    });
});
