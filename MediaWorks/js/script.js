$('.header__auth').click(function () {
    $('.modal').fadeIn()
    $('body').addClass('modal__open')
})
$('.modal__close').click(function () {
    $('.modal').fadeOut()
    $('body').removeClass('modal__open')
})


$(document).click(function (e) {
    if ($(e.target).is('.modal')) {
        $('.modal').fadeOut()
        $('body').removeClass('modal__open')
    }
});