// scroll Top
let scrollTopValue = 0;
const $btnScrollTop = document.querySelector('.topUp');
function scrollUp(){
    if(window.pageYOffset === 0){
        clearInterval(scrollTopValue);
    }else if(window.pageXOffset >= 400){
        $btnScrollTop.classList.toggle('hide');
    }
    window.scroll(0, window.pageYOffset - 50);
}
function scrollToTop(){
    scrollTopValue = setInterval(scrollUp, 16.66);
}
$btnScrollTop.addEventListener('click', scrollToTop);
