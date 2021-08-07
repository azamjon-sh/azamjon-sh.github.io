$(document).ready(function () {
    $('.hotel-city').select2();
    $("#hotel-range").ionRangeSlider({
        type: "",
        skin: "big",
        grid: false,
        min: 0,
        max: 10000,
        from: 0,
        to: 10000
    });
    if (hotels.length > 0) {
        for (let i = 0; i < hotels.length; i++) {
            let div = document.createElement('div')
            div.className = "hotel-item";
            div.innerHTML =
                '<div class="hotel-left"></div>' +
                '<div class="hotel-right">' +
                '<span class="hotel-address">' + hotels[i].address + '</span>' +
                '<h1 class="hotel-name">' + hotels[i].name + '</h1>' +
                '<div class="hotel-rating">' +
                /*createStars(hotels[i].rating) +*/ '<span class="hotel-rate">' + hotels[i].rating + '</span>' +
                '<span class="hotel-type">' + hotels[i].type + '</span></div>' +
                '<p class="hotel-descr">' + hotels[i].description + '</p>' +
                '<div class="hotel-price">От ' + hotels[i].min_price +
                '<button class="hotel-buy">Забронировать</button></div></div>';
            $('.hotel-list').append(div)
        }
    }
})
$('.filter-name').click( function () {
    if ($(this).siblings().hasClass('active')) {
        $(this).removeClass('active')
        $(this).siblings().slideUp()
        $(this).siblings().removeClass('active')
    } else {
        $(this).addClass('active')
        $(this).siblings().slideDown()
        $(this).siblings().addClass('active')
    }

})
$('.hotel-type-name').click(function (){
    $(this).toggleClass('active')
})
function runFilter() {
    filterItems()
}

function filterItems() {
    var visibleCount = 0
    var filter = getFilter()

    $items.each(function () {
        var price = $(this).attr('data-price'),
            floor = $(this).attr('data-floor'),
            rooms = $(this).attr('data-rooms'),
            complex = $(this).attr('data-complex'),
            id = $(this).attr('data-id');

        var isFloorIn = +floor <= +filter.floorMax && +floor >= +filter.floorMin
        var isPriceIn = +price <= +filter.costMax && +price >= +filter.costMin
        var isRoomsIn = filter.rooms !== 'all' ? filter.rooms === rooms : true
        var isComplexIn = filter.complex !== 'all' ? filter.complex === complex : true

        if (isFloorIn && isPriceIn && isRoomsIn && isComplexIn) {
            $(this).removeClass('hide')


            visibleCount += 1
        } else {
            $(this).addClass('hide')
        }

    })

    $('.filter-result').text('Найдено ' + visibleCount + ' ' + declOfNum(visibleCount, ['квартира', 'квартиры', 'квартир']))


}

$('.filter-delete').click(function () {
    var cleanFilter = {}
    cleanFilter.floor = $(this).attr('data-max-floor')
    cleanFilter.cost = $(this).attr('data-max-cost')
    cleanFilter.rooms = $(this).attr('data-rooms')
    cleanFilter.complex = $(this).attr('data-complex')
    complex.setChoiceByValue(cleanFilter.complex)
    rooms.setChoiceByValue(cleanFilter.rooms)
    $floorRange.data("ionRangeSlider").update({
        from: 1,
        to: cleanFilter.floor
    })
    $('#floor-from').val(1);
    $('#floor-to').val(cleanFilter.floor);
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
    // $('.filter-delete').show()
    var filter = {}

    filter.complex = $('#choices-complex').val() || null;
    filter.rooms = $('#choices-rooms').val() || null;
    filter.costMin = $('#cost-range').data("from") || null;
    filter.costMax = $('#cost-range').data("to") || null;
    filter.floorMin = $('#floor-range').data("from") || null;
    filter.floorMax = $('#floor-range').data("to") || null;

    return filter
}
