$(document).ready(function () {
    var swiper = new Swiper('#main-slider', {
        pagination: {
            el: '#main-slider .slider-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '#main-slider .arrow-next',
            prevEl: '#main-slider .arrow-prev',
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
})