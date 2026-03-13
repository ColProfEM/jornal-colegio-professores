const body = document.body;
const menuBtn = document.querySelector('header button');
const sideMenu = document.querySelector('nav');
const menuItems = document.querySelectorAll('.side-item a');

menuBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        sideMenu.classList.remove('open');
    });
});