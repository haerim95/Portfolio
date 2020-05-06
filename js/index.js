// scroll Top
let scrollTopValue = 0;
const $btnScrollTop = document.querySelector('.topUp');
function scrollUp(){
    if(window.pageYOffset === 0){
        clearInterval(scrollTopValue);
    }
    window.scroll(0, window.pageYOffset - 50);
}
function scrollToTop(){
    scrollTopValue = setInterval(scrollUp, 16.66);
}
$btnScrollTop.addEventListener('click', scrollToTop);
// top button hide / show
$btnScrollTop.style.visibility = "hidden";
window.onscroll = function() {
    var pageOffset = document.documentElement.scrollTop || document.body.scrollTop;
    if ($btnScrollTop) $btnScrollTop.style.visibility = pageOffset > 10 ? 'visible' : 'hidden';
};