let burger = document.getElementById('burger');
let nav = document.getElementById('nav');

burger.addEventListener('clcik', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active')
})