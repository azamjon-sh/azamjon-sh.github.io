$(document).ready(function () {
    $('#order-submit').click(function () {
        let phone = $('#phone').val(); // Получаем значение input
        let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        if (!regex.test(phone)) {
            $('.error-message').text('Введите номер как указано в примере');
            return false
        } else {
            $('.error-message').hide()
        }

    })
    var now = new Date()
    $('.lorem-left-date').text(now.toLocaleDateString());
    now.setMonth(now.getMonth() - 1)
    $('.lorem-right-date').text(now.toLocaleDateString())
    $('.btn-calculator').click(function () {
        $('.modal').fadeIn()
        $('body').addClass('no-scroll')
    })
    $('.modal').click(function (e) {
        if ($(e.target).is('.modal')) {
            $('.modal').fadeOut()
            $('body').removeClass('no-scroll')
        }
    })
})