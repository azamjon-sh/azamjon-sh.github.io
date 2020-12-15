$(document).ready(function(){
    $(".hamburger").click(function(){
        $(this).toggleClass("hamburger-active");
        $('.header__menu').toggleClass('active')
    });

    $(document).mouseup(function (e) {
        let container = $(".header__menu");
        let humb = $(".hamburger");
        if (container.has(e.target).length === 0 && humb.has(e.target).length === 0){
            $(".hamburger").removeClass("hamburger-active");
            $('.header__menu').removeClass('active')
        }
    });
});