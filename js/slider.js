let container = document.querySelector('.video__slider');
let track = document.querySelector('.video__track');
let items = document.querySelectorAll('.video__item');
let prev = document.querySelector('.btn-prev');
let next = document.querySelector('.btn-next');
let slideToScoll = 2;
let slideToShow = 2;

if(document.body.clientWidth <= 460) {
    slideToScoll = 1;
    slideToShow = 1;
}

const itemsCount = items.length;
let position = 0;
const itemWidth = container.clientWidth / slideToShow; // длина элемента
const movePosition = slideToScoll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth-100}px`;
});

next.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slideToShow * itemWidth) / itemWidth;

    if(itemsLeft >= slideToScoll) {
        position -= movePosition;
    }
    else {
        position -=  itemsLeft * itemWidth;
    }
    setPosition();
    checkBtns();
});


prev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;
    if(itemsLeft >= slideToScoll) {
        position += movePosition;
    }
    else {
        position += itemsLeft * itemWidth;
    }
    
    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
}

const checkBtns = () => {
    prev.disabaled = position === 0;
    next.disabaled = position <= -(itemsCount - slideToShow) * itemWidth;
}