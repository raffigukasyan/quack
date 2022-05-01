let popupBg = document.querySelector('.popup__bg');
let openPopupBtnTop = document.querySelector('.tagline__btn');
let popupWrapper = document.querySelector('.popup__wrapper');
let closePopupBtn = document.querySelector('.popup__close');
let headerBurger = document.querySelector('.header-burger');
let headerNav = document.querySelector('.header__nav');
let openPopupBtnBottom = document.querySelector('.bath__salts__btn');

openPopupBtnTop.addEventListener('click', (eve) => {
    eve.preventDefault();
    popupBg.classList.add('active');
    popupWrapper.classList.add('active');
});

openPopupBtnBottom.addEventListener('click', (eve) => {
    eve.preventDefault();
    popupBg.classList.add('active');
    popupWrapper.classList.add('active');
});

closePopupBtn.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popupWrapper.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popupWrapper.classList.remove('active');
    }
});

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('active');
    headerNav.classList.toggle('active');
    document.body.classList.toggle('lock');
});