
const header = document.querySelector('.header_section');

window.addEventListener('scroll', (e) => {
    if(window.scrollY >= 250) {
        header.classList.add('is_sticky');
    }else {
        header.classList.remove('is_sticky');
    }
});



const nav_bar = document.querySelector('.nav_bar');
const menu_bar_btn = document.querySelector('.menu_bar');
const right_wrapper = document.querySelector('.right_wrapper');


menu_bar_btn.addEventListener('click', () => {
    nav_bar.classList.toggle('show')
    right_wrapper.classList.toggle('show')
})

