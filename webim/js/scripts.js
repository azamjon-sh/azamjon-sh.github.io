$(document).ready(function () {

    $('.features__button').click(function () {
        $(this).nextAll().removeClass('active')
        $(this).prevAll().removeClass('active')
        $(this).addClass('active')

    })
    $('.partners__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.accordeon__item').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').children('.accordeon__text').slideUp()
        } else {
            $(this).nextAll().removeClass('active').children('.accordeon__text').slideUp()
            $(this).prevAll().removeClass('active').children('.accordeon__text').slideUp()
            $(this).addClass('active').children('.accordeon__text').slideDown()
        }

    })

    $(".hamburger").click(function () {
        $(this).toggleClass("hamburger-active");
        if ($(this).hasClass('hamburger-active')) {
            $('.header__item-menu').addClass('active')
        } else {
            $('.header__item-menu').removeClass('active')
        }
    });
})