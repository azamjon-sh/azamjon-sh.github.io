$(document).ready(function () {
    $('.tech__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        fade: true,
        asNavFor: '.tech__list'
    });
    $('.tech__list').slick({
        slidesToShow: 4,
        asNavFor: '.tech__slider',
        dots: true,
        arrows: false,
        focusOnSelect: true
    });
    let first = $('.firstscreen').height() - 150;
    let item = $('.page__item')
    if ($(window).scrollTop() > first) {
        item.removeClass('active')
        $('a[href="#02"]').addClass('active')
    }
    if ($(window).scrollTop() < first) {
        item.removeClass('active')
        $('a[href="#01"]').addClass('active')
    }
    item.click(function () {
        item.removeClass('active')
        $(this).addClass('active')
        if ($(window).scrollTop() > first) {
            item.removeClass('active')
            $('a[href="#02"]').addClass('active')
        }
        if ($(window).scrollTop() < first) {
            item.removeClass('active')
            $('a[href="#01"]').addClass('active')
        }
    })
    window.onscroll = function () {
        item.removeClass('active')
        if ($(this).scrollTop() > first) {
            $('a[href="#02"]').addClass('active')
        }
        if ($(this).scrollTop() < first) {
            $('a[href="#01"]').addClass('active')
        }
    }
})