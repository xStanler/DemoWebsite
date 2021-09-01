$(window).scroll(function () {
    $('.computer-txt').css('opacity', '1');
    $('.computer-img').css('opacity', '1');

    $('.phone').css('filter', 'blur(0px)');
    $('.phone-article').css('opacity', '1');
    $('.apple').css('filter', 'brightness(80%');
});




$(document).ready(function() {

    $('.phone-img').slideUp(0);

    $(window).show(function() {
        setTimeout(function() {
            $('.phone-img').slideDown(1500);
        },1000); 
    });
});