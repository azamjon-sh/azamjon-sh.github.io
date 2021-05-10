<<<<<<< HEAD
$(document).ready(function () {
    if ($('.preloader-text').length) {
        $('.preloader-text').addClass('start')
    }
    let timerId = setTimeout(preloader, 2000, false)

    if ($('#selection-filter').length)
        startSelection()

    function preloader() {
        $('body').removeClass('preloading')
        $('.preloader').fadeOut('slow')
    }

    if ($('.about-wrapper').length) {
        // $('.about-wrapper').slick({
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     dots: false,
        //     prevArrow: $('.about-button-prev'),
        //     nextArrow: $('.about-button-next'),
        // })
    }
    if ($('#apartment-slider').length) {

        $('.apartment-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            padding: 32,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ],
        })
    }

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
        if ($(e.target).is('.location-fon')) {
            $('.location-fon').fadeOut()
        }
    })
    $('.zoom-in').click(function () {
        $('body').addClass('preloading')
        $('.fullscreen').addClass('show')
    })
    $('.zoom-out').click(function () {
        $('body').removeClass('preloading')
        $('.fullscreen').removeClass('show')
    })
    $('.floor-item').click(function () {
        if (!($(this).hasClass('active'))) {
            $('.floor-item').removeClass('active')
            $(this).addClass('active')
            var activeFloor = $(this).attr('data-floor')
            console.log(activeFloor)
            $('.floor-image img').removeClass('show')
            $(`.floor-image img[data-floor=${activeFloor}]`).addClass('show')
        }
    })
    $('.floor-image img').click(function () {
        if (window.screen.width < 768) {
            $('.link-to-flat').addClass('show')
        }
    })
    $('.link-close').click(function (e) {
        e.preventDefault()
        $('.link-to-flat').removeClass('show')
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

function startSelection() {
    $('.room-item').click(function () {
        $(this).toggleClass('active')
        runFilter();
    })
    var $items = $('.apartment-list .apartment-item')

    var deadline = new Choices(
        document.getElementById('deadline'), {
            itemSelectText: '',
        })
    var $costRange = $('#cost-range').ionRangeSlider({
        skin: "big",
        type: "double",
        min: $(this).attr('data-min'),
        max: $(this).attr('data-max'),
        from: $(this).attr('data-from'),
        to: $(this).attr('data-max'),
        onStart: function (data) {
            $('#cost-from').val(number_format(data.from, 0, '', ' '));
            $('#cost-to').val(number_format(data.to, 0, '', ' '));
        },
        onChange: function (data) {
            $('#cost-from').val(number_format(data.from, 0, '', ' '));
            $('#cost-to').val(number_format(data.to, 0, '', ' '));
            runFilter();
        },
    });


    var $areaRange = $('#area-range').ionRangeSlider({
        skin: "big",
        type: "double",
        min: $(this).attr('data-min'),
        max: $(this).attr('data-max'),
        from: $(this).attr('data-from'),
        to: $(this).attr('data-max'),
        step: 0.1,
        onStart: function (data) {
            $('#area-from').val(data.from);
            $('#area-to').val(data.to);
        },
        onChange: function (data) {
            $('#area-from').val(data.from);
            $('#area-to').val(data.to);
            runFilter();
        },
    });

    $('#cost-from, #cost-to,#area-from,#area-from').inputmask({
        alias: 'numeric',
        digits: 0,
        digitsOptional: false,
        radixPoint: '.',
        placeholder: '',
        groupSeparator: ' ',
        autoGroup: true,
        autoUnmask: true,
        min: 0,
        max: 999999999,
        allowMinus: false,
        rightAlign: false,
        showMaskOnHover: false,
    });

    $('#cost-from').on("input", function () {
        var min = 0;
        var max = 1 * $('#cost-to').inputmask('unmaskedvalue');
        var $instance = $costRange.data("ionRangeSlider")
        var val = $(this).inputmask('unmaskedvalue')
        var validValue = val * 1
        if (validValue < min) {
            validValue = min;
        } else if (validValue > max) {
            validValue = max;
        }
        $instance.update({
            from: validValue,
        })
        $(this).val(validValue)
        runFilter();
    });
    $('#cost-to').on("input", function () {
        var min = 1 * $('#cost-from').inputmask('unmaskedvalue');
        var max = 1 * $('.filter-delete').attr('data-max-cost');
        var $instance = $costRange.data("ionRangeSlider")
        var val = $(this).inputmask('unmaskedvalue')
        var validValue = val * 1
        if (validValue < min) {
            validValue = min;
        } else if (validValue > max) {
            validValue = max;
        }
        $instance.update({
            to: validValue,
        })
        $(this).val(validValue)
        runFilter();
    });
    $('#area-from').on("input", function () {
        var min = 1;
        var max = 1 * $('#area-to').inputmask('unmaskedvalue');
        var $instance = $areaRange.data("ionRangeSlider")
        var val = $(this).inputmask('unmaskedvalue')
        var validValue = val * 1
        if (validValue < min) {
            validValue = min;
        } else if (validValue > max) {
            validValue = max;
        }

        $instance.update({
            from: validValue,
        })
        $(this).val(validValue)
        runFilter();
    });
    $('#area-to').on("input", function () {
        var min = 1 * $('#area-from').inputmask('unmaskedvalue');
        var max = 1 * $('.filter-delete').attr('data-max-area');
        var $instance = $areaRange.data("ionRangeSlider")
        var val = $(this).inputmask('unmaskedvalue')
        var validValue = val * 1
        if (validValue < min) {
            validValue = min;
        } else if (validValue > max) {
            validValue = max;
        }

        $instance.update({
            to: validValue,
        })
        $(this).val(validValue)
        runFilter();
    });
    $('.apartment-item').each(function () {
        var href = ''
        var section = $(this).attr('data-engname')
        var area = $(this).attr('data-area')
        var deadline = $(this).attr('data-deadline')
        if (deadline == '11') {
            href = href + '/na-vladimirskoy/'
        }
        href = href + section + '/' + '?area=' + area
        $(this).find('.apartment-price').attr('href', href)
    })

    $('#deadline').on('change', function () {
        runFilter();
    })
    $('.filter-delete').click(function () {
        var cleanFilter = {}
        cleanFilter.area = $(this).attr('data-max-area')
        cleanFilter.cost = $(this).attr('data-max-cost')
        cleanFilter.deadline = $(this).attr('data-deadline')
        deadline.setChoiceByValue(cleanFilter.deadline)
        $('.room-item.active').removeClass('active')
        $areaRange.data("ionRangeSlider").update({
            from: 1,
            to: cleanFilter.area
        })
        $('#area-from').val(1);
        $('#area-to').val(cleanFilter.area);
        $costRange.data("ionRangeSlider").update({
            from: 0,
            to: cleanFilter.cost
        })
        $('#cost-from').val(0);
        $('#cost-to').val(cleanFilter.cost);
        runFilter();
        $(this).hide()
    })

    function getFilter() {
        $('.filter-delete').show()
        var filter = {}

        filter.deadline = $('#deadline').val() || null;
        filter.costMin = $('#cost-range').data("from") || null;
        filter.costMax = $('#cost-range').data("to") || null;
        filter.areaMin = $('#area-range').data("from") || null;
        filter.areaMax = $('#area-range').data("to") || null;
        filter.rooms = []
        $('.room-item').each(function () {
            if ($(this).hasClass('active')) {
                filter.rooms.push($(this).attr('data-rooms'))
            }
        })
        if (filter.rooms.length == 0)
            filter.rooms = 'all';
        console.log(filter.rooms)
        return filter
    }

    function filterItems() {
        var visibleCount = 0
        var filter = getFilter()

        $items.each(function () {
                var price = $(this).attr('data-price'),
                    area = Number($(this).attr('data-area')),
                    rooms = $(this).attr('data-rooms'),
                    deadline = $(this).attr('data-deadline'),
                    id = $(this).attr('data-id');
                console.log(area)
                var isAreaIn = +area <= +filter.areaMax && +area >= +filter.areaMin
                var isPriceIn = +price <= +filter.costMax && +price >= +filter.costMin
                var isRoomsIn
                if (filter.rooms == 'all' || filter.rooms.indexOf(rooms) != -1) {
                    console.log(filter.rooms.indexOf(rooms))
                    isRoomsIn = true;
                } else {
                    isRoomsIn = false;
                }

                var isDeadlineIn = filter.deadline !== 'all' ? filter.deadline === deadline : true
                console.log(isAreaIn, isPriceIn, isRoomsIn, isDeadlineIn)
                if (isAreaIn && isPriceIn && isRoomsIn && isDeadlineIn) {
                    $(this).removeClass('hide')


                    visibleCount += 1
                } else {
                    $(this).addClass('hide')
                }

            }
        )

        $('.filter-result').text('Найдено ' + visibleCount + ' ' + declOfNum(visibleCount, ['квартира', 'квартиры', 'квартир']))


    }

    function runFilter() {
        filterItems()
    }

    $('.filter-result').text('Найдено ' + $('.apartment-item').length + ' ' + declOfNum($('.apartment-item').length, ['квартира', 'квартиры', 'квартир']))

}

//денежный формат
function number_format(number, decimals, dec_point, thousands_sep) {
    var i, j, kw, kd, km;
    if (isNaN(decimals = Math.abs(decimals))) {
        decimals = 2;
    }
    if (dec_point == undefined) {
        dec_point = ',';
    }
    if (thousands_sep == undefined) {
        thousands_sep = '.';
    }
    i = parseInt(number = (+number || 0).toFixed(decimals)) + '';
    if ((j = i.length) > 3) {
        j = j % 3;
    } else {
        j = 0;
    }
    km = (j ? i.substr(0, j) + thousands_sep : '');
    kw = i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands_sep);
    kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : '');
    return km + kw + kd;
}

//фукнция склонения
function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
=======
$(document).ready(function () {
    if ($('.preloader-text').length) {
        $('.preloader-text').addClass('start')
    }
    let timerId = setTimeout(preloader, 2000, false)

    if ($('#selection-filter').length)
        startSelection()

    function preloader() {
        $('body').removeClass('preloading')
        $('.preloader').fadeOut('slow')
    }

    if ($('.about-wrapper').length) {
        // $('.about-wrapper').slick({
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     dots: false,
        //     prevArrow: $('.about-button-prev'),
        //     nextArrow: $('.about-button-next'),
        // })
    }
    if ($('#apartment-slider').length) {

        $('.apartment-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            padding: 32,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ],
        })
    }

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
        if ($(e.target).is('.location-fon')) {
            $('.location-fon').fadeOut()
        }
    })
    $('.zoom-in').click(function () {
        $('body').addClass('preloading')
        $('.fullscreen').addClass('show')
    })
    $('.zoom-out').click(function () {
        $('body').removeClass('preloading')
        $('.fullscreen').removeClass('show')
    })
    $('.floor-item').click(function () {
        if (!($(this).hasClass('active'))) {
            $('.floor-item').removeClass('active')
            $(this).addClass('active')
            var activeFloor = $(this).attr('data-floor')
            console.log(activeFloor)
            $('.floor-image img').removeClass('show')
            $(`.floor-image img[data-floor=${activeFloor}]`).addClass('show')
        }
    })
    $('.floor-image img').click(function () {
        if (window.screen.width < 768) {
            $('.link-to-flat').addClass('show')
        }
    })
    $('.link-close').click(function (e) {
        e.preventDefault()
        $('.link-to-flat').removeClass('show')
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

function startSelection() {
    $('.room-item').click(function () {
        $(this).toggleClass('active')
        runFilter();
    })
    var $items = $('.apartment-list .apartment-item')

    var deadline = new Choices(
        document.getElementById('deadline'), {
            itemSelectText: '',
        })
    var $costRange = $('#cost-range').ionRangeSlider({
        skin: "big",
        type: "double",
        min: $(this).attr('data-min'),
        max: $(this).attr('data-max'),
        from: $(this).attr('data-from'),
        to: $(this).attr('data-max'),
        onStart: function (data) {
            $('#cost-from').val(number_format(data.from, 0, '', ' '));
            $('#cost-to').val(number_format(data.to, 0, '', ' '));
        },
        onChange: function (data) {
            $('#cost-from').val(number_format(data.from, 0, '', ' '));
            $('#cost-to').val(number_format(data.to, 0, '', ' '));
            runFilter();
        },
    });


    var $areaRange = $('#area-range').ionRangeSlider({
        skin: "big",
        type: "double",
        min: $(this).attr('data-min'),
        max: $(this).attr('data-max'),
        from: $(this).attr('data-from'),
        to: $(this).attr('data-max'),
        step: 0.1,
        onStart: function (data) {
            $('#area-from').val(data.from);
            $('#area-to').val(data.to);
        },
        onChange: function (data) {
            $('#area-from').val(data.from);
            $('#area-to').val(data.to);
            runFilter();
        },
    });

    $('#cost-from, #cost-to,#area-from,#area-from').inputmask({
        alias: 'numeric',
        digits: 0,
        digitsOptional: false,
        radixPoint: '.',
        placeholder: '',
        groupSeparator: ' ',
        autoGroup: true,
        autoUnmask: true,
        min: 0,
        max: 999999999,
        allowMinus: false,
        rightAlign: false,
        showMaskOnHover: false,
    });

    $('#cost-from').on("input", function () {
        var min = 0;
        var max = 1 * $('#cost-to').inputmask('unmaskedvalue');
        var $instance = $costRange.data("ionRangeSlider")
        var val = $(this).inputmask('unmaskedvalue')
        var validValue = val * 1
        if (validValue < min) {
            validValue = min;
        } else if (validValue > max) {
            validValue = max;
        }
        $instance.update({
            from: validValue,
        })
        $(this).val(validValue)
        runFilter();
    });
    $('#cost-to').on("input", function () {
        var min = 1 * $('#cost-from').inputmask('unmaskedvalue');
        var max = 1 * $('.filter-delete').attr('data-max-cost');
        var $instance = $costRange.data("ionRangeSlider")
        var val = $(this).inputmask('unmaskedvalue')
        var validValue = val * 1
        if (validValue < min) {
            validValue = min;
        } else if (validValue > max) {
            validValue = max;
        }
        $instance.update({
            to: validValue,
        })
        $(this).val(validValue)
        runFilter();
    });
    $('#area-from').on("input", function () {
        var min = 1;
        var max = 1 * $('#area-to').inputmask('unmaskedvalue');
        var $instance = $areaRange.data("ionRangeSlider")
        var val = $(this).inputmask('unmaskedvalue')
        var validValue = val * 1
        if (validValue < min) {
            validValue = min;
        } else if (validValue > max) {
            validValue = max;
        }

        $instance.update({
            from: validValue,
        })
        $(this).val(validValue)
        runFilter();
    });
    $('#area-to').on("input", function () {
        var min = 1 * $('#area-from').inputmask('unmaskedvalue');
        var max = 1 * $('.filter-delete').attr('data-max-area');
        var $instance = $areaRange.data("ionRangeSlider")
        var val = $(this).inputmask('unmaskedvalue')
        var validValue = val * 1
        if (validValue < min) {
            validValue = min;
        } else if (validValue > max) {
            validValue = max;
        }

        $instance.update({
            to: validValue,
        })
        $(this).val(validValue)
        runFilter();
    });
    $('.apartment-item').each(function () {
        var href = ''
        var section = $(this).attr('data-engname')
        var area = $(this).attr('data-area')
        var deadline = $(this).attr('data-deadline')
        if (deadline == '11') {
            href = href + '/na-vladimirskoy/'
        }
        href = href + section + '/' + '?area=' + area
        $(this).find('.apartment-price').attr('href', href)
    })

    $('#deadline').on('change', function () {
        runFilter();
    })
    $('.filter-delete').click(function () {
        var cleanFilter = {}
        cleanFilter.area = $(this).attr('data-max-area')
        cleanFilter.cost = $(this).attr('data-max-cost')
        cleanFilter.deadline = $(this).attr('data-deadline')
        deadline.setChoiceByValue(cleanFilter.deadline)
        $('.room-item.active').removeClass('active')
        $areaRange.data("ionRangeSlider").update({
            from: 1,
            to: cleanFilter.area
        })
        $('#area-from').val(1);
        $('#area-to').val(cleanFilter.area);
        $costRange.data("ionRangeSlider").update({
            from: 0,
            to: cleanFilter.cost
        })
        $('#cost-from').val(0);
        $('#cost-to').val(cleanFilter.cost);
        runFilter();
        $(this).hide()
    })

    function getFilter() {
        $('.filter-delete').show()
        var filter = {}

        filter.deadline = $('#deadline').val() || null;
        filter.costMin = $('#cost-range').data("from") || null;
        filter.costMax = $('#cost-range').data("to") || null;
        filter.areaMin = $('#area-range').data("from") || null;
        filter.areaMax = $('#area-range').data("to") || null;
        filter.rooms = []
        $('.room-item').each(function () {
            if ($(this).hasClass('active')) {
                filter.rooms.push($(this).attr('data-rooms'))
            }
        })
        if (filter.rooms.length == 0)
            filter.rooms = 'all';
        console.log(filter.rooms)
        return filter
    }

    function filterItems() {
        var visibleCount = 0
        var filter = getFilter()

        $items.each(function () {
                var price = $(this).attr('data-price'),
                    area = Number($(this).attr('data-area')),
                    rooms = $(this).attr('data-rooms'),
                    deadline = $(this).attr('data-deadline'),
                    id = $(this).attr('data-id');
                console.log(area)
                var isAreaIn = +area <= +filter.areaMax && +area >= +filter.areaMin
                var isPriceIn = +price <= +filter.costMax && +price >= +filter.costMin
                var isRoomsIn
                if (filter.rooms == 'all' || filter.rooms.indexOf(rooms) != -1) {
                    console.log(filter.rooms.indexOf(rooms))
                    isRoomsIn = true;
                } else {
                    isRoomsIn = false;
                }

                var isDeadlineIn = filter.deadline !== 'all' ? filter.deadline === deadline : true
                console.log(isAreaIn, isPriceIn, isRoomsIn, isDeadlineIn)
                if (isAreaIn && isPriceIn && isRoomsIn && isDeadlineIn) {
                    $(this).removeClass('hide')


                    visibleCount += 1
                } else {
                    $(this).addClass('hide')
                }

            }
        )

        $('.filter-result').text('Найдено ' + visibleCount + ' ' + declOfNum(visibleCount, ['квартира', 'квартиры', 'квартир']))


    }

    function runFilter() {
        filterItems()
    }

    $('.filter-result').text('Найдено ' + $('.apartment-item').length + ' ' + declOfNum($('.apartment-item').length, ['квартира', 'квартиры', 'квартир']))

}

//денежный формат
function number_format(number, decimals, dec_point, thousands_sep) {
    var i, j, kw, kd, km;
    if (isNaN(decimals = Math.abs(decimals))) {
        decimals = 2;
    }
    if (dec_point == undefined) {
        dec_point = ',';
    }
    if (thousands_sep == undefined) {
        thousands_sep = '.';
    }
    i = parseInt(number = (+number || 0).toFixed(decimals)) + '';
    if ((j = i.length) > 3) {
        j = j % 3;
    } else {
        j = 0;
    }
    km = (j ? i.substr(0, j) + thousands_sep : '');
    kw = i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands_sep);
    kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : '');
    return km + kw + kd;
}

//фукнция склонения
function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
>>>>>>> 166b87d23fa700e4806e02fa0c833f73f634e4b2
}