$(document).ready(function () {
    $('.preloader-content').addClass('start')
    $('.preloader-first').slideDown(400)
    if (window.screen.width > 1000) {
        contentEffect(1);
    } else {
        contentEffect(10);
    }
    setTimeout(function () {
        $('.preloader-first').addClass('to-top')
        $('.preloader-second').fadeIn('300')
    }, 500);
    let timerId = setTimeout(startPreload, 2000, false)
    var rooms = new Swiper('#main-slider', {
        effect: 'fade',
        pagination: {
            el: '#main-slider .slider-pagination',
            type: 'fraction',
        },
        speed: 50,
        navigation: {
            nextEl: '#main-slider .arrow-next',
            prevEl: '#main-slider .arrow-prev',
        },

    });
    var discounts = new Swiper('#discount', {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 32,
        pagination: {
            el: '#discount-pagination',
            type: 'bullets'
        },
        navigation: {
            nextEl: '.discount-next',
            prevEl: '.discount-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 3,
            },
            768: {
                pagination: false,
                slidesPerView: 3,
            },
        }
    });
    var roomInner = new Swiper('#inner-slider', {
        slidesPerView: 1.33,
        centerSlides:true,
        loop: true,
        spaceBetween: 32,
        pagination: false,
        navigation: false,
    });
    $('.fullscreen-close').click(function () {
        $('.header-fullscreen').slideUp()
        $('body').removeClass('no-scroll')
    })
    $('.introduction-burger, .header-burger').click(function () {
        $('body').addClass('no-scroll')
        $('.header-fullscreen').slideDown()
    })
    var header = $('.header');
    $(window).on('scroll', function () {
        if ($('.introduction').length) {
            if ($(this).scrollTop() > $('.introduction').height()) {
                if (!(header.hasClass('show'))) {
                    header.addClass('show')
                }
            } else {
                if ((header.hasClass('show'))) {
                    header.removeClass('show')
                }
            }
        } else {
            if ($(this).scrollTop() > 50) {
                if (!(header.hasClass('show'))) {
                    header.addClass('show')
                }
            } else {
                if ((header.hasClass('show'))) {
                    header.removeClass('show')
                }
            }
        }
    })
    if ($('#map').length) {
        ymaps.ready(function () {
            initMaps();
        });
    }
    $('.contact-submit').click(ValidMail)
})

function ValidMail() {
    var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
    var mail = $('#sub-email').val()
    var output;
    if (mail != '') {
        if (pattern.test(mail) != false) {
            if ($('#contact-politic').is(':checked')) {
                $('.contact-form').removeClass('error').addClass('success')
                $('.success-message').fadeIn()
            } else {
                $('.contact-form').addClass('error')
                output = 'Ознакомтесь с политикой конфиденциальности'
            }
        } else {
            $('.contact-form').addClass('error')
            output = 'Произошла ошибка. Указанный E-mail некорректен'
        }
    } else {
        $('.contact-form').addClass('error')
        output = 'Произошла ошибка. Указанный E-mail некорректен'
    }
    $('.error-message').text(output)
}

function startPreload() {
    $('body').removeClass('no-scroll')
    $('.preloader').fadeOut()
    $('.introduction').removeClass('scaled')
}

function initMaps() {
    map = new ymaps.Map('map', {
        center: [53.205701, 50.126650],
        zoom: 15,
        controls: ['zoomControl']
    }, {
        suppressMapOpenBlock: true,
        yandexMapDisablePoiInteractivity: true,
        viewportMargin: 0
    });
    var myPlacemark = new ymaps.Placemark([53.205701, 50.126650], {
        hintContent: '7 Avenue Hotel & SPA',
        balloonContent: '7 Avenue Hotel & SPA'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-object.svg',
        iconImageSize: [50, 60],
        iconImageOffset: [-16, -16],
    });
    map.geoObjects.add(myPlacemark);

    map.behaviors.disable('scrollZoom')
}

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
