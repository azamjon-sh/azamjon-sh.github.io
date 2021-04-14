$(document).ready(function () {
    $('.preloader-text').addClass('start')
    let timerId = setTimeout(preloader, 2000, false)

    function preloader() {
        $('body').removeClass('preloading')
        $('.preloader').fadeOut('slow')
    }

    $('.menu-btn').click(function () {
        $(this).toggleClass('open')
        if ($(this).hasClass('open')) {
            $('.header-menu').slideDown()
        } else {
            $('.header-menu').slideUp()

        }
    })

    $('.about-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.about-button-prev'),
        nextArrow: $('.about-button-next'),
    })

    contentEffect();
    $('.location-right-item').click(function () {
        $(this).toggleClass('active')
    })
    $('.location-left').click(function () {
        $(this).toggleClass('active')
    })
})

function contentEffect() {
    if ($('.effecttext').length) {
        $('.effecttext').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated fadeInUp',
            offset: 50
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
            offset: 50
        });
    }

    if ($('.effectfade').length) {
        $('.effectfade').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated fadeInEffect',
            offset: 50
        });
    }

    if ($('.effectfadeleft').length) {
        $('.effectfadeleft').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated fadeInLeft',
            offset: 50
        });
    }
    if ($('.effectfaderight').length) {
        $('.effectfaderight').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated animate__fadeInRightBig',
            offset: 50
        });
    }

    if ($('.effecttextdown').length) {
        $('.effecttextdown').addClass('hidden').viewportChecker({
            classToAdd: 'visible animated animate__fadeInDownBig',
            offset: 0
        });
    }
    if ($('.iphonex').length) {
        $('.iphonex').addClass('active').viewportChecker({
            classToAdd: 'visible animated',
            offset: 100
        });
    }

    if ($('#index_clients').length) {
        $('#index_clients').viewportChecker({
            classToAdd: 'show',
            offset: 100,
            callbackFunction: function (elem, action) {

            }
        });
    }

    if ($('#index_clients').length) {
        $('#index_clients').viewportChecker({
            classToAdd: 'show',
            offset: 100,
            callbackFunction: function (elem, action) {

            }
        });
    }
}
