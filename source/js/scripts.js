var mainNav = document.querySelector('.main-nav');
var mainToggle = document.querySelector('.main-nav__toggle');
var addToCart = document.querySelectorAll('.catalog__cart-link');
var popup = document.querySelector('.pop-up');
var popupAdd = document.querySelector('.pop-up__btn');

mainNav.classList.remove('main-nav--nojs');
switchMenu();

mainToggle.addEventListener('click', function () {
  switchMenu();
});

function switchMenu() {
  mainNav.classList.toggle('main-nav--closed');
  mainNav.classList.toggle('main-nav--opened');
}

for (var i = 0; i < addToCart.length; i++) {
  addToCart[i].addEventListener('click', function (evt) {
    evt.preventDefault();

    popup.classList.remove('pop-up--hide');
    popup.classList.add('pop-up');
  });
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    popup.classList.add('pop-up--hide');
  }
});

popupAdd.addEventListener('click', function (evt) {
  evt.preventDefault();

  popup.classList.add('pop-up--hide');
});
