$('.topMatch__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
});

$('.category__date').click(function (event) {
    $('.date-list').toggleClass('active')
})
$('.date__item').click(function (e) {
    let date = $(this).text()
    $('.category__date-checked').text(date);
    e.preventDefault()
})
$('.sport__item').click(function () {
    $('.sport__item').removeClass('active')
    $(this).addClass('active')
})