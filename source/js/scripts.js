var mainNav = document.querySelector('.main-nav');
var mainToggle = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs');

mainToggle.addEventListener('click', function() {
    mainNav.classList.toggle('main-nav--closed');
    mainNav.classList.toggle('main-nav--opened');
});
