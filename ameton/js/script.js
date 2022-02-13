$(document).ready(function () {
    $('.questions__slider').slick({
        slidesToShow: 4,
        infinite: true,
        slidesToScroll: 1,
        nextArrow: $('[data-js-arrow="next"]'),
        prevArrow: $('[data-js-arrow="prev"]'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
    });
})