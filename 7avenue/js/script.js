$(document).ready(function () {
    var rooms = new Swiper('#main-slider', {
        effect:'fade',
        pagination: {
            el: '#main-slider .slider-pagination',
            type: 'fraction',
        },
        longSwipesMs: 50,
        navigation: {
            nextEl: '#main-slider .arrow-next',
            prevEl: '#main-slider .arrow-prev',
        },
    });
    var discounts = new Swiper('#discount', {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 32,
        pagination: false,
        navigation: {
            nextEl: '.discount-prev',
            prevEl: '.discount-next',
        },
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
        if ($(this).scrollTop() > $('.introduction').height()) {
            if (!(header.hasClass('show'))) {
                header.addClass('show')
            }
        } else {
            if ((header.hasClass('show'))) {
                header.removeClass('show')
            }
        }
    })
    ymaps.ready(function () {
        initMaps();
    });
})
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
        iconImageOffset: [-16,-16],
    });
    map.geoObjects.add(myPlacemark);

    map.behaviors.disable('scrollZoom')
}