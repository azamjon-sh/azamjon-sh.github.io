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
    $('.filter-btn').click(function () {
        $('.location-bottom').fadeIn()
        $('body').addClass('preloading')
    })
    $('.use-btn').click(function () {
        $('.location-bottom').fadeOut()
        $('body').removeClass('preloading')
    })
    $('.about-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.about-button-prev'),
        nextArrow: $('.about-button-next'),
    })
    contentEffect();
   
    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [53.286570, 50.222692],
            zoom: 15,
            controls: [
                'zoomControl', // Ползунок масштаба
            ]
        });

        var mySchools = new ymaps.Placemark([53.265751, 50.225417], {
            hintContent: 'Школа № 100',
            balloonContent: 'Школа № 100',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/school.svg',
            iconImageSize: [32, 32],
            iconImageOffset: [-16, -16],
        });
        myMap.geoObjects.add(mySchools);

        var shop = new ymaps.Placemark([53.288072, 50.222992], {
            hintContent: 'Пятерочка',
            balloonContent: 'Сеть магазинов Пятерочка',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/shops.svg',
            iconImageSize: [32, 32],
            iconImageOffset: [-16, -16],
        });
        myMap.geoObjects.add(shop);

        var medecine = new ymaps.Placemark([53.265799, 50.227008], {
            hintContent: 'Магнит',
            balloonContent: 'Сеть магазинов Магнит',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/medecine.svg',
            iconImageSize: [32, 32],
            iconImageOffset: [-16, -16],
        });
        myMap.geoObjects.add(medecine);
        var kinder = new ymaps.Placemark([53.270288, 50.217965], {
            hintContent: 'Кораблик детства',
            balloonContent: 'Кораблик детства',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/kinder.svg',
            iconImageSize: [32, 32],
            iconImageOffset: [-16, -16],
        });
        myMap.geoObjects.add(kinder);
        var traning = new ymaps.Placemark([53.274692, 50.226808], {
            hintContent: 'Клуб спортивных единоборств и фитнеса Прайд',
            balloonContent: 'Клуб спортивных единоборств и фитнеса Прайд',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/traning.svg',
            iconImageSize: [32, 32],
            iconImageOffset: [-16, -16],
        });
        myMap.geoObjects.add(traning);
        var stops = new ymaps.Placemark([53.290832, 50.224082], {
            hintContent: 'Клуб спортивных единоборств и фитнеса Прайд',
            balloonContent: 'Клуб спортивных единоборств и фитнеса Прайд',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/bus.svg',
            iconImageSize: [32, 32],
            iconImageOffset: [-16, -16],
        });
        myMap.geoObjects.add(stops);
        var myPlacemark = new ymaps.Placemark([53.286570, 50.222692], {
            hintContent: 'Содержимое всплывающей подсказки',
            balloonContent: 'Содержимое балуна'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/placemark.svg',
            iconImageSize: [32, 32],
            iconImageOffset: [-16, -16],
        });

        // После того как метка была создана, добавляем её на карту.
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom')
        $('.location-book').click(function () {
            $(this).toggleClass('checked')
            if ($(this).hasClass('checked')) {
                mySchools.options.set("visible", true)
            } else {
                mySchools.options.set("visible", false)
            }
        })
        $('.location-rocking-horse').click(function () {
            $(this).toggleClass('checked')
            if ($(this).hasClass('checked')) {
                kinder.options.set("visible", true)
            } else {
                kinder.options.set("visible", false)
            }
        })
        $('.location-shopping-cart').click(function () {
            $(this).toggleClass('checked')
            if ($(this).hasClass('checked')) {
                shop.options.set("visible", true)
            } else {
                shop.options.set("visible", false)
            }
        })
        $('.location-dumbbell').click(function () {
            $(this).toggleClass('checked')
            if ($(this).hasClass('checked')) {
                traning.options.set("visible", true)
            } else {
                traning.options.set("visible", false)
            }
        })
        $('.location-cross').click(function () {
            $(this).toggleClass('checked')
            if ($(this).hasClass('checked')) {
                medecine.options.set("visible", true)
            } else {
                medecine.options.set("visible", false)
            }
        })
        $('.location-routs').click(function () {
            $(this).toggleClass('checked')
            if ($(this).hasClass('checked')) {
                stops.options.set("visible", true)
            } else {
                stops.options.set("visible", false)
            }
        })

    }

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
