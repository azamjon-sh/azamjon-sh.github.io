$(document).ready(function () {

    $('.slider__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        speed: 500,
        infinite: true,
        cssEase: 'ease-in-out',
        prevArrow: "<div class='prevArrow'></div>",
        nextArrow: "<div class='nextArrow'></div>"
    });

})