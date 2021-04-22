$(document).ready(function () {
    $('.preloader-text').addClass('start')
    let timerId = setTimeout(preloader, 2000, false)

    function preloader() {
        $('body').removeClass('preloading')
        $('.preloader').fadeOut('slow')
    }

    $('.about-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.about-button-prev'),
        nextArrow: $('.about-button-next'),
    })
    $('.menu-open').click(function () {
        $('.header-mob-menu').slideDown()
        $('body').addClass('preloading')
    })
    $('.menu-close').click(function () {
        $('.header-mob-menu').slideUp()
        $('body').removeClass('preloading')
    })
    $('.filter-btn').click(function () {
        $('.location-fon').fadeIn()
        $('body').addClass('preloading')
    })
    $('.use-btn').click(function () {
        $('.location-fon').fadeOut()
        $('body').removeClass('preloading')
    })
    if (window.screen.width > 1000) {
        contentEffect(1);
    } else {
        contentEffect(10);
    }
    $('.location-fon').click(function (e) {
        if ($(e.target).is('.location-fon')){
            $('.location-fon').fadeOut()
        }
    })
})

function contentEffect(val) {
    if ($('.effecttext').length) {
        $('.effecttext').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated fadeInUp',
            offset: 200 / val
        });
    }
    if ($('.effectfadetop').length) {
        $('.effectfadetop').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated animate__fadeInUpBig',
            offset: 0
        });
    }

    if ($('.effecttextfast').length) {
        $('.effecttextfast').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated-04s fadeInUp',
            offset: 200 / val
        });
    }

    if ($('.effectfade').length) {
        $('.effectfade').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated fadeInEffect',
            offset: 200 / val
        });
    }

    if ($('.effectfadeleft').length) {
        $('.effectfadeleft').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated fadeInLeft',
            offset: 200 / val
        });
    }
    if ($('.effectfaderight').length) {
        $('.effectfaderight').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated animate__fadeInRightBig',
            offset: 200 / val
        });
    }

    if ($('.effecttextdown').length) {
        $('.effecttextdown').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated animate__fadeInDownBig',
            offset: 0 / val
        });
    }
    if ($('.iphonex').length) {
        $('.iphonex').addClass('active').viewportChecker({
            classToAdd: 'visible animated',
            offset: 400 / val
        });
    }

    if ($('#index_clients').length) {
        $('#index_clients').viewportChecker({
            classToAdd: 'show',
            offset: 400 / val,
            callbackFunction: function (elem, action) {

            }
        });
    }

    if ($('#index_clients').length) {
        $('#index_clients').viewportChecker({
            classToAdd: 'show',
            offset: 400 / val,
            callbackFunction: function (elem, action) {

            }
        });
    }
}
